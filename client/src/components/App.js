import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TaskCreate from './tasks/TaskCreate';
import TaskEdit from './tasks/TaskEdit';
import TaskDelete from './tasks/TaskDelete';
import TaskShow from './tasks/TaskShow';
import TaskList from './tasks/TaskList';
import Header from './Header';

const App = () =>{
	return(
		<div className='ui container'>
			<BrowserRouter>
				<div>
				<Header/>
					<Route path='/' exact component={TaskList}/>
					<Route path='/tasks/new'  component={TaskCreate}/>
					<Route path='/tasks/edit' exact component={TaskEdit}/>
					<Route path='/tasks/delete'  component={TaskDelete}/>
					<Route path='/tasks/show'  component={TaskShow}/>
				</div>
			</BrowserRouter>
	 	</div>
	 )
}

export default App;