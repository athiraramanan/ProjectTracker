import React from 'react';
import {connect} from 'react-redux';
import {fetchTasks} from '../../actions'

class TaskList extends React.Component {
	componentDidMount(){
		this.props.fetchTasks()
	}

	renderList(){
		return this.props.tasks.map(task =>{
			return(
				<div className='item' key={task.id}>
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
	return {tasks: Object.values(state.tasks)}
}
export default connect(mapStateToProps, {fetchTasks})(TaskList);