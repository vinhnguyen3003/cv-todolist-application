import React, {Component} from 'react';
import{connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component{
  onUpdateStatus=()=>{
    this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete=()=>{
    this.props.onDelete(this.props.task.id);
    this.props.onCloseForm();
  }
  onUpdateContent=()=>{
    this.props.onOpenForm();
    this.props.onUpdateContent(this.props.task);
  }
  render(){
    var {task,index}=this.props; 
    return(     
        <tr>
            <td>{index +1}</td> 
            <td>{task.name}</td>
            <td>
                <span className={task.status === true ? 'label label-success ml-10':'label label-danger ml-10'}
                      onClick={this.onUpdateStatus}
                >
                    { task.status === true ?'Kích hoạt':'Ẩn'}
                </span>
            </td>
            <td>
                <button className="btn btn-success" 
                        onClick={this.onUpdateContent}
                >
                    <i className="fas fa-edit"></i>&nbsp;Sửa
                </button>&nbsp;
                <button className="btn btn-danger" onClick={this.onDelete}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Xóa
                </button>
            </td>
        </tr>
      );
  }
}

const mapStateToProps=(state)=>{
  return{
  // www: state.tasks
  }
};

const mapDispatchToProps =(dispatch,props) =>{
  return{
      onUpdateStatus: (id) =>{
        dispatch(actions.updateStatus(id));
     },
      onDelete: (id) =>{
        dispatch(actions.deleteTask(id));
      },
      onCloseForm: () =>{
        dispatch(actions.closeForm());
     },
      onOpenForm: () =>{
        dispatch(actions.openForm());
      },
      onUpdateContent: (task) =>{
        dispatch(actions.updateContent(task));
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (TaskItem);
