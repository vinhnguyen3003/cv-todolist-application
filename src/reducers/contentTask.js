import * as types from './../constants/actionTypes';

var initialState = {
	id: '',
	name: '',
	status: true
};

var myReducer = (state=initialState,action) =>{
	switch(action.type){
		case types.UPDATE_CONTENT :
			//console.log(action.task);
			return action.task;
		default: 
			return state;

	}
}

export default myReducer;