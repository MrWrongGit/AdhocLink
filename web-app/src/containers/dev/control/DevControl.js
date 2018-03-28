import React from 'react'
import { connect } from 'react-redux'

import { Card, NavBar, Icon, List, InputItem, Button } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'


class DevControl extends React.Component{
	
	componentWillMount(){
		constructor
	}

	render(){
		console.log(this.props)
		const devId=this.props.match.params.id
		const devInfo = this.props.devices.filter((devInfoMeta)=>{
			return devInfoMeta.id===devId
		})
		console.log(devInfo[0])
		return (
			<div>
				<NavBar 
					mode="dark"
					icon={<Icon type="left" />}
      				onLeftClick={()=>{window.history.back()}}
      			>{devInfo[0].name==='' ? devInfo[0].id : devInfo[0].name}</NavBar>

      			<List>
      				
      				<Button type="primary">确定</Button>
      			</List>
      			<Card>
			      <Card.Header
			        title="开关"
			        extra={<span>On</span>}
			      />
			      <Card.Body>
			        <div>This is content of `Card`</div>
			      </Card.Body>
			      <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
			    </Card>
			</div>
		)
	}
}
//(devInfoMeta.id==='ef7689ab')
const matchStateToProps = (state) => {
	
	return state
}

export default DevControl= connect(
	matchStateToProps
)(DevControl)