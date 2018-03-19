import { combineReducers } from 'redux'

const SPLASH_SHOW_ENBLE   = "splash_show_enable"
const SPLASH_SHOW_DISABLE = "splash_show_disable"

const splash = (state={showEn:true},action) => {
	switch(action.type){
		case SPLASH_SHOW_ENBLE:
			return {...state,showEn:true}
		case SPLASH_SHOW_DISABLE:
			return {...state,showEn:false}
		default:
			return state
	}
}

export default combineReducers({
  splash
})