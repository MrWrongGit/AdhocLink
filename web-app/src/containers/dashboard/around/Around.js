import React from 'react'
import { connect } from 'react-redux'

import { NavBar, SearchBar, List} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

import DevConfig from '../../dev/config/DevConfig'
import DevControl from '../../dev/control/DevControl'

import './around.css'
const Item = List.Item

class Around extends React.Component{
	
	render(){
		console.log(this.props.devices)
		let deivcesArry = this.props.devices.filter((device)=>device.isAround)
		console.log(this.props)
		return (
			<div>
				<NavBar className='top-fix' mode="dark">Adhoc-Link</NavBar>
				<SearchBar className='top-unfix' placeholder="搜索" />

				<List>{ 
					deivcesArry.map((device,index)=>{
						return (
							<Item
								key={index}
								thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
			          			arrow="horizontal"
			          			onClick={()=>{
			          				const toPath = '/dev/' + (device.authored ? 'control/' : 'config/') + device.id
			          				console.log(toPath)
			          				this.props.history.push(toPath)
			          			}}
			          		>{device.name !=='' ? device.name : device.id}</Item>
						)})}
			    </List>
			</div>
		)
	}
}

export default Around = connect(
	(state)=>state
)(Around)