import tasks from '../apis/tasks';
import {	SIGN_IN,
					SIGN_OUT, 
					CREATE_TASK,
					FETCH_TASKS, 
					FETCH_TASK, 
					EDIT_TASK,
					DELETE_TASK } from './type'
export const signIn = (userId) =>{
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createTask = formValues => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await tasks.post('/tasks', { ...formValues, userId})	
	dispatch({type: CREATE_TASK, payload: response.data});
}

export const fetchTasks = () => async dispatch => {
	const response = await tasks.get('/tasks')
	dispatch({ type: FETCH_TASKS, payload: response.data})
} 

export const fetchTask = (id) => async dispatch => {
	const response = await tasks.get(`/tasks/${id}`)
	dispatch({type: FETCH_TASK, payload: response.data})
}

export const editTask = (id, formValues) => async dispatch =>{
	const response = await tasks.put(`/tasks/${id}`, formValues)
	dispatch({type: EDIT_TASK, payload: response.data});
}

export const deleteTask = (id) => async dispatch => {
	await tasks.delete(`/tasks/${id}`)
	dispatch({type: DELETE_TASK, payload: id});
} 