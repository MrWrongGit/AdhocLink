import React from 'react'
import { connect } from 'react-redux'

import {Steps, ActivityIndicator,Toast, Modal,Card, NavBar, Icon, List, InputItem, Button, Switch} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

import {deviceAuth, devPannelReq} from '../../../reduxs/device.redux'

import './devControl.css'

const prompt = Modal.prompt;

const Step = Steps.Step;

const ST_UN_AUTH=0

const ST_AUTH_REQ=1
const ST_AUTH_OK=2
const ST_AUTH_FAIL=3
const ST_AUTH_TIMEOUT=4

const ST_PANNEL_REQ=5
const ST_PANNEL_RDY=6
const ST_PANNEL_REQ_FAIL=7
const ST_PANNEL_REQ_TIMEOUT=8

class DevControl extends React.Component{
	/*
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
	}*/
	componentWillMount(){
		const devInfo = this.props.devices.filter((devInfoMeta)=>{
			return devInfoMeta.id===this.props.match.params.id
		})

		if(devInfo[0].state===ST_UN_AUTH){
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
			          		this.props.deviceAuth(this.props.match.params.id, password)
			          		/*
							if(password==='1234'){
				      			Toast.success('认证成功！', 1);
				      		}else{
				      			Toast.fail('认证失败！', 2);
				      			setTimeout(()=>{
				      				window.history.back()
				      			},1500)
				      		}
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
				      		},3000)*/
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


	showContent(state){
		let currentStep = 0

		let statusAuth = 'wait'
		let authDesc = '设备未认证，请输入设备密码以认证'

		let statusPannelReq = 'wait'
		let pannelReqDesc = '未获得设备操控面板'

		switch(state){
			case ST_AUTH_REQ:
				statusAuth = 'process'
				authDesc = '设备认证中......'
				break
			case ST_AUTH_OK:
				statusAuth = 'finish'
				authDesc = '设备认证成功！'
				break
			case ST_AUTH_FAIL:
				statusAuth = 'error'
				authDesc = '密码错误！'
				break
			case ST_AUTH_TIMEOUT:
				statusAuth = 'error'
				authDesc = '设备认证超时！'
				break

			case ST_PANNEL_REQ:
				statusAuth = 'finish'
				authDesc = '设备认证成功！'
				currentStep = 1
				statusPannelReq = 'process'
				pannelReqDesc = '正在请求设备操控面板......'
				break
			case ST_PANNEL_RDY:
				statusAuth = 'finish'
				authDesc = '设备认证成功！'
				currentStep = 1
				statusPannelReq = 'finish'
				pannelReqDesc = '设备操控面板就绪！'
				break
			case ST_PANNEL_REQ_FAIL:
				statusAuth = 'finish'
				authDesc = '设备认证成功！'
				currentStep = 1
				statusPannelReq = 'error'
				pannelReqDesc = '设备异常！'
				break
			case ST_PANNEL_REQ_TIMEOUT:
				statusAuth = 'finish'
				authDesc = '设备认证成功！'
				currentStep = 1
				statusPannelReq = 'error'
				pannelReqDesc = '请求超时！'
				break
		}

		if(state===ST_PANNEL_RDY){
			return this.showPannel()
		}
		else{
			console.log("statusAuth="+statusAuth+" statusPannelReq="+statusPannelReq)
			return (
				<Card full={false}>
			      <Card.Header
			        title="设备初始化"
			      />
			      <Card.Body>
			        <Steps current={currentStep}>
						<Step title='设备认证' status={statusAuth} description={authDesc} />
						<Step title='获取面板' status={statusPannelReq} description={pannelReqDesc} />
					</Steps>
			      </Card.Body>
			    </Card>	
			)
		}
	}
/*
	showContent(state){
		switch(state){
			case ST_UN_AUTH:
				return <h2 className='middleDisp'>设备尚未认证!</h2>
			case ST_AUTH_REQ:
				return <ActivityIndicator className='middleDisp' size="large" text="设备认证中..." />
			case ST_AUTH_OK:
				return <h2 className='middleDisp'>设备认证成功!</h2>
			case ST_AUTH_FAIL:
				return <h2 className='middleDisp'>密码错误!!!</h2>
			case ST_AUTH_TIMEOUT:
				return <h2 className='middleDisp'>请求超时!!!</h2>

			case ST_PANNEL_REQ:
				return <ActivityIndicator className='middleDisp' size="large" text="正在获取控制面板..." />
			case ST_PANNEL_RDY:
				return this.showPannel()
			case ST_PANNEL_REQ_FAIL:
				return <h2 className='middleDisp'> 设备异常!!!</h2>
			case ST_PANNEL_REQ_TIMEOUT:
				return <h2 className='middleDisp'>请求超时!!!</h2>
		}
	}
*/
	componentDidUpdate(){
		console.log(this.props);
		const devInfo = this.props.devices.filter((devInfoMeta)=>{
			return devInfoMeta.id===this.props.match.params.id
		})
		const state = devInfo[0].state
		if(state===ST_AUTH_FAIL){
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
			          		this.props.deviceAuth(this.props.match.params.id, password)
			          	}
			        }
			 	],'secure-text')
		}else if(state===ST_AUTH_OK){
			console.log('sssssss')
			this.props.devPannelReq(this.props.match.params.id)
		}
		
	}
	render(){
		console.log(this.props);
		const devInfo = this.props.devices.filter((devInfoMeta)=>{
			return devInfoMeta.id===this.props.match.params.id
		})


		return (
			<div>
				<NavBar 
					mode="dark"
					icon={<Icon type="left" />}
      				onLeftClick={()=>{window.history.back()}}
					
					rightIcon={<Icon type="ellipsis" />}
      				onRightClick={()=>{
      					this.props.history.push('/dev/config/'+devInfo[0].id)
      				}}
      			>
      				{devInfo[0].name==='' ? devInfo[0].id : devInfo[0].name}
      			</NavBar>
				
				{this.showContent(devInfo[0].state)}
			</div>
		)
	}
}


const matchStateToProps = (state) => {
	
	return state
}

export default DevControl= connect(
	matchStateToProps,
	{deviceAuth, devPannelReq}
)(DevControl)