import React from 'react'

import { NavBar, SearchBar, List} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

import './device.css'

import { connect } from 'react-redux'

const Item = List.Item

class Device extends React.Component{
	render(){
		let deivcesArry = this.props.devices.filter((device)=>device.subscribed)
		return (
			<div>
				<NavBar className='top-fix' mode="dark">收藏</NavBar>
				<SearchBar className='top-unfix' placeholder="搜索" />

				<List>{ 
					deivcesArry.map((device,index)=>{
						return (
							<Item
								key={index}
								thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
			          			arrow="horizontal"

			          			bage={1}

			          			onClick={()=>{
			          				this.props.history.push('/dev/control/'+device.id)
			          			}}
			          		>{device.name !=='' ? device.name : device.id}</Item>
						)})}
			    </List>
			</div>
		)
	}
}
//如果设备在周围 则显示小红点----------------

export default Device = connect(
	(state)=>state
)(Device)