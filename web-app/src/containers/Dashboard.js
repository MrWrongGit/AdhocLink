import React from 'react'
import { Input } from 'antd';
import { List, Avatar } from 'antd';
const Search = Input.Search;

class Dashboard extends React.Component{
	render() {
		const data = [
			  {
			    title: 'Ant Design Title 1',
			  },
			  {
			    title: 'Ant Design Title 2',
			  },
			  {
			    title: 'Ant Design Title 3',
			  },
			  {
			    title: 'Ant Design Title 4',
			  },
			];
		return (
			<div>
				<h1>I am Dashboard</h1>
				<Search
			      placeholder="搜索"
			      onSearch={value => console.log(value)}
			      style={{ width: 200 }}
			    />
			    <List
				    itemLayout="horizontal"
				    dataSource={data}
				    renderItem={item => (
				      <List.Item>
				        <List.Item.Meta
				          avatar={<Avatar src="http://img2.imgtn.bdimg.com/it/u=3217764537,3208946253&fm=27&gp=0.jpg" />}
				          title={<a href="https://ant.design">{item.title}</a>}
				          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
				        />
				      </List.Item>
				    )}
				  />
			</div>
		)
	}
}

export default Dashboard