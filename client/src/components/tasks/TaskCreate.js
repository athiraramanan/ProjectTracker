import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TaskCreate extends React.Component{

	renderTextInput({input, label}){
		return( 
			<div className='field'>
				<label>{label}</label>
				<input {...input}/>
			</div>
		)
	}
	onSubmit(formValues){
		console.log(formValues)
	}

	render(){
		return(
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
				{/*its a predifined component for using the different kinds of form*/}
				<Field name='Task' component={this.renderTextInput} label='Enter Task'/>
				<div className='field'>
					<label >Enter Project</label>
					<Field name="Project" component="select" label='Enter Project'>
	          <option />
	          <option value="Learning">Learning</option>
	          <option value="Other Activities">Other Activities</option>
	          <option value="Leave">Leave</option>
	          <option value="Local Holiday">Local Holiday</option>
        	</Field>
        </div>
				<Field name='Hours' component={this.renderTextInput} label='Enter Hours'/>
				<Field name='Date' component={this.renderTextInput} label='Enter Date'/>
				<Field name='Description' component={this.renderTextInput}  label='Enter Description'/>
				<button className='ui button primary'>Submit</button>	
			</form>
		)
	}	
}
export default  reduxForm({
	// name of form is just a string that represnet the functionality of this component
	// it may be in any format like task, Task, TASK etc
	form: 'TaskCreate'
})(TaskCreate);