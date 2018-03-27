import React from 'react'

import Around from './around/Around'
import Device from './device/Device'
import User from './user/User'

import { Switch, Route } from 'react-router-dom'

import { NavBar, Icon, TabBar } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

import './dashboard.css'

class Dashboard extends React.Component{
	render(){
		return (
			<div>
				<Switch>
					<Route path='/dashboard/around' component={Around} />
					<Route path='/dashboard/device' component={Device} />
					<Route path='/dashboard/user' component={User} />
				</Switch>

			 	<TabBar>
          			<TabBar.Item
	            		icon={<div style={{width: '22px', height: '22px',
							background: 'url(https://gw.alipayobjects.com/zos/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
			            />}
            			selectedIcon={<div style={{width: '22px', height: '22px',
                			background: 'url(https://gw.alipayobjects.com/zos/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
              			/>}
            			title="周围"
            			selected={this.props.location.pathname === '/dashboard/around'}
            			onPress={() => {this.props.history.push('/dashboard/around')}}
         	 		/>

          			<TabBar.Item
	            		icon={<div style={{width: '22px', height: '22px',
							background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
			            />}
            			selectedIcon={<div style={{width: '22px', height: '22px',
                			background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              			/>}
            			title="收藏"
            			selected={this.props.location.pathname === '/dashboard/device'}
            			onPress={() => {this.props.history.push('/dashboard/device')}}
         	 		/>

         	 		<TabBar.Item
	            		icon={<div style={{width: '22px', height: '22px',
							background: 'url(https://gw.alipayobjects.com/zos/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
			            />}
            			selectedIcon={<div style={{width: '22px', height: '22px',
                			background: 'url(https://gw.alipayobjects.com/zos/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              			/>}
            			title="我的"
            			selected={this.props.location.pathname === '/dashboard/user'}
            			onPress={() => {this.props.history.push('/dashboard/user')}}
         	 		/>
        		</TabBar>
			</div>
		)
	}
}

export default Dashboard