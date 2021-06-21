import * as types from './../constants/actionTypes';

var initialState = {
	sortBy: 'name',
	sortValue: 1 //1 tăng dần, -1 giảm dần
};

var myReducer = (state=initialState,action) =>{
	switch(action.type){
		case types.SORT_TASK_TOOL :

		return {
			sortBy: action.sort.sortBy,
			sortValue: action.sort.sortValue
		};

		default: return state;
	}
}

export default myReducer;