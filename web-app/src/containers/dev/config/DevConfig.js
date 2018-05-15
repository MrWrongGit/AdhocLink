import React from 'react'

import { NavBar, Icon, List, InputItem, Button } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

const Item = List.Item;

class DevConfig extends React.Component{
	render(){
		console.log(this.props)
		return (
			<div>
				<NavBar 
					mode="dark"
					icon={<Icon type="left" />}
      				onLeftClick={()=>{window.history.back()}}
      			>详情</NavBar>

      			<List>
		<Item extra={<img src="https://b-ssl.duitang.com/uploads/item/201509/11/20150911114322_8niAa.jpeg" height="45px" />} arrow="horizontal" onClick={() => {}}>头像</Item>
				  	<Item extra="空调" arrow="horizontal" onClick={() => {}}>名字</Item>
					<Item extra={this.props.match.params.id} disabled={true}>ID</Item>
      			</List>
			</div>
		)
	}
}

export default DevConfig 