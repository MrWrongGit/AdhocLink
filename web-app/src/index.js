//react
import React from 'react';
import ReactDOM from 'react-dom';

//router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

//containers
//import Splash from './containers/Splash'
//import Dashboard from './containers/Dashboard'

//redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//containers
import Invalid from './containers/invalid/Invalid'
import Splash from './containers/splash/Splash'
import Login from './containers/login/Login'
import Register from './containers/register/Register'

import Dashboard from './containers/dashboard/Dashboard'
import Around from './containers/dashboard/around/Around'
import Device from './containers/dashboard/device/Device'
import User from './containers/dashboard/user/User'

import DevControl from './containers/dev/control/DevControl'
import DevConfig from './containers/dev/config/DevConfig'

//reducer
import mainReducer from './reducers/mainReducer'

const store = createStore(mainReducer)

ReactDOM.render((
	<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route path='/splash' component={Splash}></Route>
			<Route path='/login' component={Login}></Route>
			<Route path='/register' component={Register}></Route>
			<Route path='/dashboard' component={Dashboard}>
				<Route path='/around' component={Around}></Route>
				<Route path='/device' component={Device}></Route>
				<Route path='/user' component={User}></Route>
			</Route>
			<Route path='/dev/control' component={DevControl}></Route>
			<Route path='/dev/config' component= {DevConfig}></Route>
			<Route path='/invalid' component={Invalid}></Route>

			<Redirect to='/invalid'></Redirect>
		</Switch>
	</BrowserRouter>
	</Provider>
), document.getElementById('root'));
