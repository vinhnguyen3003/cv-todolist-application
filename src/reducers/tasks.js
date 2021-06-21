import * as types from './../constants/actionTypes';

var s4 =()=>{
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
}

var generateID=()=>{
	return s4() + s4() + '-' + s4() + s4() +s4() + '-' +
		s4() + s4() + '-' +s4();
}
var findIndex=(tasks,id)=>{
    var result = -1;
    tasks.forEach((task,index)=>{
        if(task.id === id){
           
            result = index;
        }
    });
    return result;
  }

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state=initialState,action)=>{
	var id=action.id;
	var index =findIndex(state,id);
	//id,index dùng chung cho hai case

	switch(action.type){
		case types.LIST_ALL:
			return [...state];
		case types.SAVE_TASKS:
			var task ={
				id: action.task.id,
				name: action.task.name,
				status: action.task.status //=== 'true' ? true : false, không cần xử lí nữa vì phần onhandlechange của taskform đã xử lí
			}
			if(!task.id){
				task.id= generateID();
				state.push(task);
			}
			else
			{
				index= findIndex(state,task.id);
				state[index]=task;
			}
			localStorage.setItem('tasks',JSON.stringify(state) );
			return [...state];


		case types.UPDATE_STATUS_TASK:
			//console.log(action);
			
	        // state[index].status = !state[index].status;

	        //Dùng cho cách 1 và 2
	        var cloneTask = {...state[index]};
	        cloneTask.status= !cloneTask.status;

	        // cách 1: khi dùng sẽ bị thay đổi vị trí phần tử mảng do có splice và push
	        // state.splice(index,1);
	        // state.push(cloneTask);

	        // cách 2
	        state[index] = cloneTask;

	        // cách 3
	        // state[index]={
	        // 	...state[index],
	        // 	status: !state[index].status
	        // };
	        localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.DELETE_TASK:
			//console.log(action);
			if(index !== -1){
		        state.splice(index,1);
		        localStorage.setItem('tasks',JSON.stringify(state));
		    }
			return [...state];

		default: 
			return state;	
	}
}
export default myReducer;