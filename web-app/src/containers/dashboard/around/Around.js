import React from 'react'
import { connect } from 'react-redux'

class Around extends React.Component{
	render(){
		console.log(this.props.devices)
		let deivcesArry = this.props.devices.filter((device)=>device.isAround)
		console.log(deivcesArry)
		return (
			<div>
				<h1>Around Page</h1>
				<ul>
					{
						deivcesArry.map((device,index)=><li key={index}>{device.name !=='' ? device.name : device.id}</li>)
					}
				</ul>
				
			</div>
		)
	}
}

export default Around = connect(
	(state)=>state
)(Around)