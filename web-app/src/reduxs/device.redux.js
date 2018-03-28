
const initState = {'devices':[
	{
		'id':'ef7689ab',
		'name':'电视机',
		'img':'48x48/tv.png',
		'authored':false,
		'isAround':true,
		'subscribed':false	
	},
	{
		'id':'ef7689aa',
		'name':'',
		'img':'',
		'authored':false,
		'isAround':true,
		'subscribed':false	
	},
	{
		'id':'ef7689dd',
		'name':'',
		'img':'',
		'authored':false,
		'isAround':true,
		'subscribed':false	
	},
	{
		'id':'ef7689cc',
		'name':'',
		'img':'',
		'authored':false,
		'isAround':true,
		'subscribed':false	
	},
	{
		'id':'ef7689ac',
		'name':'主卧空调',
		'img':'48x48/ac.png',
		'authored':false,
		'isAround':false,
		'subscribed':true	
	},
	{
		'id':'ef7689ac',
		'name':'客厅空调',
		'img':'48x48/ac.png',
		'authored':true,
		'isAround':false,
		'subscribed':true	
	}
]}


const SUB_DEV = 'sub_dev'
const UNSUB_DEV = 'unsub_dev'

export const devicesReducer=(state=initState,action)=>{
	return state;
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

