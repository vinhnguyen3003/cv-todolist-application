import {combineReducers} from 'redux';
import tasks from './tasks';
import form from './form';
import contentTask from './contentTask';
import filterTable from './filterTable';
import searchTool from './searchTool';
import sortTool from './sortTool'

const myReducer = combineReducers({
	tasks,
	form,
	contentTask,
	filterTable,
	searchTool,
	sortTool
});

export default myReducer;