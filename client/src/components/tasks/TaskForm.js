import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TaskForm extends React.Component{
	renderError({touched, error}) {
		if (touched && error){
			return(
				<div className='ui error message'>
					<div className='headder'>{error}</div>
				</div>
			)
		}
	}

	renderTextInput=({input, label, meta})=>{
		const className=`field ${meta.error && meta.touched ? 'error' : ''}`
		return( 
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete='off'/>
				{this.renderError(meta)}
			</div>
		)
	}
	onSubmit = (formValues) => {
		this.props.onSubmit(formValues)
	}

	render(){
		return(
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
				{/*its a predifined component for using the different kinds of form*/}
				<Field name='task' component={this.renderTextInput} label='Enter Task'/>
				<div className='field'>
					<label >Enter Project</label>
					<Field name="project" component="select" label='Enter Project'>
	          <option value="Learning">Learning</option>
	          <option value="Other Activities">Other Activities</option>
	          <option value="Leave">Leave</option>
	          <option value="Local Holiday">Local Holiday</option>
        	</Field>
        </div>
				<Field name='hours' component={this.renderTextInput} label='Enter Hours'/>
				<Field name='date' component={this.renderTextInput} label='Enter Date'/>
				<Field name='description' component={this.renderTextInput}  label='Enter Description'/>
				<button className='ui button primary'>Submit</button>	
			</form>
		)
	}	
}

const validate = (formValues) =>{
	const errors={};
	if (!formValues.task){
		errors.task='You must enter task'
	}
	if (!formValues.hours){
		errors.hours='You must enter hours'
	}
	if (!formValues.date){
		errors.date='You must enter date'
	}
	if (!formValues.description){
		errors.description='You must enter description'
	}
	return errors;
}

export default reduxForm({
	// name of form is just a string that represnet the functionality of this component
	// it may be in any format like task, Task, TASK etc
	form: 'TaskForm',
	validate
})(TaskForm);