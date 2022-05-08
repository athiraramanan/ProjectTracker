import React from 'react';
import {connect} from 'react-redux';
import {fetchTasks} from '../../actions'

class TaskList extends React.Component {
	componentDidMount(){
		this.props.fetchTasks()
	}

	renderAdmin(task){
		if (task.userId==this.props.currentUserId) {
			return (
				<div className='right floated content'>
					<button className='ui button primary'>EDIT</button>
					<button className='ui button negative'>DELETE</button>
				</div>
			)
		}
	}

	renderList(){
		return this.props.tasks.map(task =>{
			return(
				<div className='item' key={task.id}>
					{this.renderAdmin(task)}
					<i className='large middle aligned tasks icon'/>
						<div className='content'>{task.task}
						{/*<div className='hours'>{task.hours}</div>*/}
						{/*<div className='date'>{task.date}</div>*/}
						<div className='description'>{task.description}</div>
					</div>
				</div>
			)
		});
	}

	render(){
		return(
			<div>
			<h2>Tasks</h2>
				<div className='ui celled list'>
					{this.renderList()}
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
		currentUserId: state.auth.userId
	}
}
export default connect(mapStateToProps, {fetchTasks})(TaskList);