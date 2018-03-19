import React from 'react'
import logo from '../res/logo.jpg'
import './splash.css'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import { splashShowEnable, splashShowDisable } from '../actions/splash.action'


class Splash extends React.Component{
	constructor(props) {
    	super(props);

    	setTimeout(()=>{
    		this.props.splashShowDisable()
    		
    		console.log("Redirect to dashboard")
    	},2000);
  	}

	render() {
		if(this.props.showEn){
			return (
				<div id='logo'>
					<img  src={logo} />
				</div>
			)
		}else{
			return <Redirect to='/dashboard'></Redirect>
		}
	}
}

const mapStateToProps = (state) => {
	return {showEn: state.splash.showEn}
}

const actionCreators = {
	splashShowEnable, 
	splashShowDisable 
}

export default Splash = connect(mapStateToProps,actionCreators)(Splash)
