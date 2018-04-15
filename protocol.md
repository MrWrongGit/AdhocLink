# 串口协议
起始     0xAA 0x55
数据长度 数据域字节个数  
命令字  
数据域   
校验和   数据长度+命令字+数据域所有数据相加




# 周边设备列表
## 请求周边设备列表 (上位机 -> 下位机)
命令：0x10

## 周边设备列表同步 (下位机 -> 上位机 & 下位机可随时主动推送)
说明：主动推送意思是即使上位机没有发送请求，下位机可随时推送，上位机并不是遵循 请求-等待-响应 的模式  
     上位机的所有请求均是异步的，下位机不返回数据并不会阻塞上位机
### 全同步
命令: 0x10  
数据：deviceA_mac + '&' + deviceB_mac + '&' + deviceC_mac ...  
说明：上位机将清空列表

### 追加
命令: 0x11  
数据：deviceA_mac + '&' + deviceB_mac + '&' + deviceC_mac ...  
说明：上位机将在原列表顶部追加设备
      当设备太多，下位机可以先发送全同步，然后发送多个追加

### 删除
命令: 0x12  
数据：deviceA_mac + '&' + deviceB_mac + '&' + deviceC_mac ...  
说明：上位机将从列表中移除对应mac地址的设备




# 设备认证
## 请求设备认证 (上位机 -> 下位机)
命令: 0x20  
数据：device_mac + '&' + password  

## 设备认证响应 (下位机 -> 上位机 & 下位机可随时主动发送)
### 认证成功
命令：0x20
数据：device_mac
说明：需要告诉上位机具体是哪一个设备认证成功了

### 认证失败
命令：0x2F / 0x2E
数据：device_mac
说明: 
    0x2F: 请求超时
    0x2E: 密码错误




# 获取设备控制面板
## 请求设备控制面板 (上位机 -> 下位机)
命令：0x30  
数据：device_mac

## 设备控制面板请求响应 (下位机 -> 上位机 & 下位机可随时主动发送)
### 成功获取
命令：0x30 / 0x31  
数据：device_mac + current_page + total_pages + json-data  
说明:   
    current_page: 数据分片索引  
    total_pages: 数据分片总数  
    0x30：常规返回0x30  
    0x31: 最后一个分片返回0x31，此时上位机会确认片段是否丢失，然后重新请求或者完成接收

### 获取失败
命令: 0x3F
数据：device_mac

## 请求分片重发 (上位机 -> 下位机)
命令：0x32  
数据：device_mac + page_number  
说明：下位机使用0x31回复即可




# 设备控制
## 发送控制命令/请求设备数据 (上位机 -> 下位机 & 下位机可随时主动发送)
命令: 0x40
数据：device_mac + sync_index + port + dir (+ current_page + total_pages + data)
说明: 
    sync_index: 用于区分响应
    port：设备的资源端口号
    dir：0表示请求数据，1表示发送数据
    data: 当dir为1时，存在data字段

## 成功响应
命令: 0x40 / 0x41 
数据：device_mac + sync_index (+ current_page + total_pages + data)

## 响应失败
命令: 0x4F / 4E
数据：device_mac + sync_index
说明：
    0x4F：超时
    0x4E: 拒绝访问

## 信息推送