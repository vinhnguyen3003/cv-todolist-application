import * as types from './../constants/actionTypes';

var initialState = '';

var myReducer = (state=initialState,action) =>{
	switch(action.type){
		case types.SEARCH_TASK_TOOL :
			//console.log(action);
		return action.keyword;

		default: return state;
	}
}

export default myReducer;