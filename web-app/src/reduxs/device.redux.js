
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
		'id':'ef7689ac',
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

export const devicesReducer=(state=initState,action)=>{
	switch(action.type){
		case DEV_AUTH:
			return state.map((devInfoMeta)=>{
						if(devInfoMeta.id===action.devId){
							devInfoMeta.pswd = action.pswd
							devInfoMeta.state = action.state
						}
					})
		default:
			return state;
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

export const deviceAuth(devId,pswd){
	return (dispatch) => {
		setTimeout(()=>{
			cosnt state = (pswd==="123456") ? ST_AUTH_OK : ST_AUTH_FAIL
  			dispatch({
  				'type':DEV_AUTH,
  				'pswd':pswd,
  				'devId':devId,
  				'state':state
  			})
  		})
  		},3000)
	}
}

