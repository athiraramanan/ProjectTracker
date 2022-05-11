import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchTasks} from '../../actions'
import '../../css/App.css';

class TaskList extends React.Component {
	componentDidMount(){
		this.props.fetchTasks()
	}

	renderCreate(){
		if(this.props.isSignedIn){
			return(
				<div style={{textAlign: 'left'}}>
					<Link to="/tasks/new" className='ui button primary'>Add New</Link>
				</div>
			)
		}
	}

	renderAdmin(task){
		if (task.userId===this.props.currentUserId) {
			return (
				<div className='right floated content'>
					<Link to={`/tasks/edit/${task.id}`}><i className='edit icon'/></Link>
					<Link to={`/task/delete/${task.id}`}><i className='archive icon'/></Link>
				</div>
			)
		}
	}

	renderList(){
		return this.props.tasks.map(task =>{		
			return(	
			<tr key={task.id}>
				<td><i className='large middle aligned tasks icon'/></td>
				<td>{task.task}</td>
				<td>{task.hours}</td>
				<td>{task.date}</td>
				<td>{task.description}</td>
				<td>{this.renderAdmin(task)}</td>
			</tr>
			)
		});
	}

	render(){
		return(
			<div>
				{this.renderCreate()}	
				<div className='ui celled list'>
					<table className='item' id='customers'>
					<thead>
						<tr style={{color: "balck", 'backgroundColor': 'lightblue'}}>
							<th>No.</th>
							<th>Task</th>
							<th>Hours</th>				
							<th>Date</th>
							<th>Description</th>
							<th>Action</th>
						</tr>	
					</thead>
					<tbody>
						{this.renderList()}	
					</tbody>				
					</table>
				</div>
			</div>
		)
	}
}

const mapStateToProps =(state) => {
	// Object.values is a function that pulled
	// out all the data from the state function and inserted to an array
	return {
		tasks: Object.values(state.tasks),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	}
}
export default connect(mapStateToProps, {fetchTasks})(TaskList);