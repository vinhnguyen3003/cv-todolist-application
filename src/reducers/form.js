import * as types from './../constants/actionTypes';

var initialState = false;

var myReducer = (state=initialState,action) =>{
	switch(action.type){
		case types.TOGGLE_FORM :
			state =! state;
		return state;

		case types.CLOSE_FORM :
			state = false;
		return state;

		case types.OPEN_FORM :
			state = true;
		return state;

		default: return state;
	}
}

export default myReducer;