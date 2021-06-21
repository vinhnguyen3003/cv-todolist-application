import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'', 
            status:true
        }
    }

  componentDidMount(){
    if(this.props.taskEditing){
        this.setState({
            id:this.props.taskEditing.id,
            name:this.props.taskEditing.name,
            status:this.props.taskEditing.status
        });
    }else 
        this.onClear();
  }


  onCloseForm=()=>{
    this.props.onCloseForm();
  }


  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.taskEditing){
        this.setState({
            id:nextProps.taskEditing.id,
            name: nextProps.taskEditing.name,
            status: nextProps.taskEditing.status
            });
    }else if(nextProps && nextProps.taskEditing ===  null){
            this.onClear();
    }
  }


  onHandleChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    if(name==='status'){
        value=target.value === 'true' ? true : false;
    }
    this.setState({
        [name]:value
    });
  }


  onSubmit=(event)=>{
    event.preventDefault();
    this.props.onSaveTask(this.state); 
    this.onClear();
    this.onCloseForm();
  }


  onClear=()=>{
    this.setState({
        name:'',
        status:true
    });
  }


  render(){
    //console.log(this.state);
    return(
        <div className="panel panel-primary">
            <div className="panel-heading">
                {this.state.id !== '' ?'Cập nhập công việc':'Thêm công việc'}
                <span onClick={ this.onCloseForm }><i className="fas fa-times-circle"></i>
                </span>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên: </label><br/>
                        <input 
                            type="text" 
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onHandleChange}
                        /><br/>
                    </div>
                    <div className="form-group">
                        <label>Trạng thái:</label><br/>
                        <select className="form-control"
                                name="status"
                                value={this.state.status}
                                onChange={this.onHandleChange}
                        >
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                    </div>    
                    <div>
                        <button type="submit" 
                                className="btn btn-success edit-btn1" >
                            <i className="fas fa-plus"></i>&nbsp;Lưu lại
                        </button>
                            {/*Bắt buộc dùng type submit để phân biệt sự kiện onSubmit cho button nào*/}
                        <button type="button" className="btn btn-danger edit-btn2" 
                                onClick={this.onClear}
                        >
                            <i className="fas fa-times"></i>&nbsp;Hủy bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
      );
  }
}

const mapStateToProps = (state) =>{
    return {
        taskEditing: state.contentTask 
    }
};
const mapDispatchToProps =(dispatch,props)=>{
    return {
        onSaveTask: (task)=>{
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () =>{
            dispatch(actions.closeForm());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
