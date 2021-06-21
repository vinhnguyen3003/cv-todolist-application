import React, {Component} from 'react';
import TaskItem from './TaskItem.js';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component{
  constructor(props){
    super(props);
    this.state={
        filterName:'',
        filterStatus: -1
    }
  }
  onChange=(event)=>{
    var target=event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilterTable({
        filterName: name === 'filterName' ? value : this.state.filterName,
        filterStatus: name === 'filterStatus' ? value : this.state.filterStatus
    });
    this.setState({
        [name]:value
    });
  }
  render(){
    var {tasks,filter,keyword }=this.props;
    var {sortBy,sortValue} = this.props.sort;
    
    if(filter){
        if(filter.filterName){
            tasks=tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(filter.filterName) !== -1;
            });
        };
        tasks=tasks.filter((task)=>{
            if(filter.filterStatus === -1){
                return task;
            }else{
                return task.status === (filter.filterStatus === 1 ? true : false);
            }
        });
    } 

    if(keyword){
         tasks= tasks.filter((task)=>{
            return task.name.toLowerCase().indexOf(keyword) !== -1;
        });
    }

    if(sortBy === 'name'){
        tasks.sort((a,b)=>{
            if(a.name > b.name) return sortValue;
            else if(a.name < b.name) return -sortValue;
            else return 0;
        });
    }
    else{
        tasks.sort((a,b)=>{
            if(a.status > b.status) return -sortValue;
            else if(a.status < b.status) return sortValue;
            else return 0;
        });
    }

    var elmTasks=tasks.map((task,index,tasks)=>{
        return <TaskItem 
            key={task.id} 
            index={index} 
            task={task}
                />
    });
    var {filterName, filterStatus} = this.state;
    return(
        <table border="1" className="tb1" >
            <thead>
                <tr>
                    <th>Số thứ tự</th>
                    <th>Tên</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="filterName"
                            value={filterName}
                            onChange={this.onChange}
                        />
                    </td>
                    <td>
                        <select 
                            className="form-control"
                            name="filterStatus"
                            value={filterStatus}
                            onChange={this.onChange}
                        >
                            <option value={-1} >Tất cả</option>
                            <option value={1} >Kích hoạt</option>
                            <option value={0} >Ẩn</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {elmTasks}
            </tbody>
        </table>
      );
  }
}

const mapStateToProps=(state)=>{
    return{
        tasks : state.tasks,
        filter: state.filterTable,
        keyword: state.searchTool,
        sort: state.sortTool
    }
};
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onFilterTable: (filter)=>{
            dispatch(actions.filterTaskTable(filter));
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (TaskList);
