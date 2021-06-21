import * as types from './../constants/actionTypes';

var initialState = {
	filterName:'',
	filterStatus: -1
};

var myReducer = (state=initialState,action) =>{
	switch(action.type){
		case types.FILTER_TASK_TABLE :
			
		return {
			filterName: action.filter.filterName,
			filterStatus: parseInt(action.filter.filterStatus),
		};

		default: 
			return state;
	}
}

export default myReducer;