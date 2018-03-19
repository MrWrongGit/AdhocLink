//react
import React from 'react';
import ReactDOM from 'react-dom';

//router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

//containers
import Splash from './containers/Splash'
import Dashboard from './containers/Dashboard'

//redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//reducer
import mainReducer from './reducers/mainReducer'

const store = createStore(mainReducer)

ReactDOM.render((
	<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route path='/splash' component={Splash}></Route>
			<Route path='/dashboard' component={Dashboard}></Route>
			
			<Redirect to='/splash'></Redirect>
		</Switch>
	</BrowserRouter>
	</Provider>
), document.getElementById('root'));
