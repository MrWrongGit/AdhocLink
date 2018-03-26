import React from 'react'

class Device extends React.Component{
	render(){
		return (
			<div>
				<h1>Device Page</h1>
				<p>{this.props.match.params.id}</p>
			</div>
		)
	}
}

export default Device