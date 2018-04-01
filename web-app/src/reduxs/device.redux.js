
const ST_UN_AUTH=0

const ST_AUTH_REQ=1
const ST_AUTH_OK=2
const ST_AUTH_FAIL=3
const ST_AUTH_TIMEOUT=4

const ST_PANNEL_REQ=5
const ST_PANNEL_RDY=6
const ST_PANNEL_REQ_FAIL=7
const ST_PANNEL_REQ_TIMEOUT=8

const initState = {'devices':[
	{
		'id':'ef7689ab',
		'name':'电视机',
		'img':'48x48/tv.png',
		'authored':false,
		'state':ST_UN_AUTH,
		'isAround':true,
		'subscribed':false,
		'pswd':''	
	},
	{
		'id':'ef7689aa',
		'name':'',
		'img':'',
		'authored':false,
		'state':ST_UN_AUTH,
		'isAround':true,
		'subscribed':false,
		'pswd':''	
	},
	{
		'id':'ef7689dd',
		'name':'',
		'img':'',
		'authored':false,
		'state':ST_UN_AUTH,
		'isAround':true,
		'subscribed':false,
		'pswd':''	
	},
	{
		'id':'ef7689cc',
		'name':'',
		'img':'',
		'authored':false,
		'state':ST_UN_AUTH,
		'isAround':true,
		'subscribed':false,
		'pswd':''	
	},
	{
		'id':'ef7689dc',
		'name':'主卧空调',
		'img':'48x48/ac.png',
		'authored':false,
		'state':ST_UN_AUTH,
		'isAround':false,
		'subscribed':true,
		'pswd':''	
	},
	{
		'id':'ef7689ac',
		'name':'客厅空调',
		'img':'48x48/ac.png',
		'authored':true,
		'state':ST_UN_AUTH,
		'isAround':false,
		'subscribed':true,
		'pswd':''
	}
]}


const SUB_DEV = 'sub_dev'
const UNSUB_DEV = 'unsub_dev'

const DEV_AUTH = 'dev_auth'
const DEV_AUTH_RTN = 'dev_auth_rtn'

const DEV_PANNEL_REQ = 'dev_pannel_req'
const DEV_PANNEL_RSP = 'dev_pannel_rsp'

export const devicesReducer=(state=initState,action)=>{
	//deep-copy
	let newState = JSON.parse(JSON.stringify(state));
	
	switch(action.type){
		case DEV_AUTH:
			return {'devices': newState.devices.map((devInfoMeta)=>{
						if(devInfoMeta.id===action.devId){
							devInfoMeta.state = ST_AUTH_REQ
						}
						return devInfoMeta
					})}
		case DEV_AUTH_RTN:
			return {'devices': newState.devices.map((devInfoMeta)=>{
						if(devInfoMeta.id===action.devId){
							devInfoMeta.pswd = action.pswd
							devInfoMeta.state = action.state
						}
						return devInfoMeta
					})}
		case DEV_PANNEL_REQ:
			return {'devices': newState.devices.map((devInfoMeta)=>{
						if(devInfoMeta.id===action.devId){
							devInfoMeta.state = ST_PANNEL_REQ
						}
						return devInfoMeta
					})}
		case DEV_PANNEL_RSP:
			return {'devices': newState.devices.map((devInfoMeta)=>{
						if(devInfoMeta.id===action.devId){
							devInfoMeta.state = action.state
						}
						return devInfoMeta
					})}
		default:
			return newState;
	}
}

export const subscribeDevice=(devInfo)=>{
	return {
		'tyep':SUB_DEV,
		'payload':devInfo
	}
}

export const unSubscribeDevice=(devId)=>{
	return {
		'tyep':UNSUB_DEV,
		'payload':devId
	}
}

export const deviceAuth=(devId,pswd)=>{
	return (dispatch) => {
		dispatch({
  				'type':DEV_AUTH,
  				'devId':devId,
  		})

		setTimeout(()=>{
			const state = (pswd==="123456") ? ST_AUTH_OK : ST_AUTH_FAIL
  			dispatch({
  				'type':DEV_AUTH_RTN,
  				'pswd':pswd,
  				'devId':devId,
  				'state':state
  			})
  		},3000)
	}
}

export const devPannelReq=(devId)=>{
	return (dispatch) => {
		console.log('bbbb');
		dispatch({
  				'type':DEV_PANNEL_REQ,
  				'devId':devId,
  		})

		setTimeout(()=>{
			console.log('ccc');
  			dispatch({
  				'type':DEV_PANNEL_RSP,
  				'devId':devId,
  				'state':ST_PANNEL_RDY
  			})
  		},3000)
	}
}

