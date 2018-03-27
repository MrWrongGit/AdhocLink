import React from 'react'

import { NavBar, Icon, List, InputItem, Button } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'


class DevConfig extends React.Component{
	render(){
		console.log(this.props)
		return (
			<div>
				<NavBar 
					mode="light"
					icon={<Icon type="left" />}
      				onLeftClick={()=>{window.history.back()}}
      			>设备设置</NavBar>

      			<List>
      				<InputItem placeholder={this.props.match.params.id}
      					disabled={true}>设备ID:</InputItem>
      				<InputItem placeholder='如： 客厅空调'>设备别名:</InputItem>
      				<InputItem placeholder='请输入设备登录密码'>密码验证:</InputItem>
      				<Button type="primary" loading={true} disabled={true}>确定</Button>
      			</List>
			</div>
		)
	}
}

export default DevConfig