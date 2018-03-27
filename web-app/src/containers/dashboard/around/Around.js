import React from 'react'
import { connect } from 'react-redux'

import { NavBar, SearchBar, List} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

const Item = List.Item

class Around extends React.Component{
	render(){
		console.log(this.props.devices)
		let deivcesArry = this.props.devices.filter((device)=>device.isAround)
		console.log(deivcesArry)
		return (
			<div>
				<NavBar mode="light">Adhoc-Link</NavBar>
				<SearchBar placeholder="搜索" />

				<List>{ 
					deivcesArry.map((device,index)=>{
						return (
							<Item
								thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
			          			arrow="horizontal"
			          			onClick={() => {}}
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