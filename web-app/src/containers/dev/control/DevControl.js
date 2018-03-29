import React from 'react'
import { connect } from 'react-redux'

import {ActivityIndicator,Toast, Modal,Card, NavBar, Icon, List, InputItem, Button, Switch} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

const prompt = Modal.prompt;

class DevControl extends React.Component{
	
	constructor(props){
		super(props)

		const devInfo = this.props.devices.filter((devInfoMeta)=>{
			return devInfoMeta.id===this.props.match.params.id
		})

		this.state = {
			'devInfo' : devInfo[0],
			'authorState' : devInfo[0].authored ? 'authored' : 'unAuthored'
		}

		console.log(NavBar)
	}
	componentWillMount(){
		if(this.state.authorState==='unAuthored'){
			prompt('设备认证', '请输入设备密码',
				[
			        {
			          	text: '取消',
			          	onPress: () => {
			              	window.history.back()
			          	}
			        },
			        {
			          	text: '确认',
			          	onPress: password => {
			          		/*
							if(password==='1234'){
				      			Toast.success('认证成功！', 1);
				      		}else{
				      			Toast.fail('认证失败！', 2);
				      			setTimeout(()=>{
				      				window.history.back()
				      			},1500)
				      		}*/
				      		this.setState({
				      			'authorState':'authoring'
				      		})

				      		setTimeout(()=>{
				      			this.setState({
				      			'authorState':'pannelReqing'
				      		})
				      		},1500)

				      		setTimeout(()=>{
				      			this.setState({
				      			'authorState':'pannelReady'
				      		})
				      		},3000)
			          	}
			        }
			 	],'secure-text')
		}
	}

	showPannel(){
		return (
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
		)
	}

	showContent(){
		if(this.state.authorState==='authoring'){
			return (
				<ActivityIndicator size="large" text="正在认证..." />
			)
		}else if(this.state.authorState==='pannelReqing'){
			return (
				<ActivityIndicator size="large" text="正在获取控制面板..." />
			)
		}else if(this.state.authorState==='pannelReady'){
			return this.showPannel()
		}
	}

	render(){
		return (
			<div>
				<NavBar 
					mode="dark"
					icon={<Icon type="left" />}
      				onLeftClick={()=>{window.history.back()}}
					
					rightIcon={<Icon type="ellipsis" />}
      				onRightClick={()=>{
      					this.props.history.push('/dev/config/'+this.state.devInfo.id)
      				}}
      			>
      				{this.state.devInfo.name==='' ? this.state.devInfo.id : this.state.devInfo.name}
      			</NavBar>
				
				{this.showContent()}
			</div>
		)
	}
}


const matchStateToProps = (state) => {
	
	return state
}

export default DevControl= connect(
	matchStateToProps
)(DevControl)