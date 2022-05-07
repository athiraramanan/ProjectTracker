import {
	FETCH_TASKS,
	FETCH_TASK,
	CREATE_TASKS,
	DELETE_TASK,
	EDIT_TASK} from '../actions/types';

export default (state={}, action) => {
	switch (action.type){
		case FETCH_TASK:
			return {...state,[action.payload.id]: action.payload}
		case CREATE_TASK:
			return {...state, [action.payload.id]: action.payload}
		case EDIT_TASK:
			return {...state, [action.payload.id]: action.payload}
		default: 
			return state;
	}
}