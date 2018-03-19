const SPLASH_SHOW_ENBLE   = "splash_show_enable"
const SPLASH_SHOW_DISABLE = "splash_show_disable"

export function splashShowEnable(){
	return {type: SPLASH_SHOW_ENBLE}
}

export function splashShowDisable(){
	return {type: SPLASH_SHOW_DISABLE}
}