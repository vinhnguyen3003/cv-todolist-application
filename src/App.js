import React, {Component} from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';
import {connect} from 'react-redux';
import * as actions from './actions/index';
class App extends Component{
  
  onDisplayForm=()=>{
  	var {contentTask}= this.props;
  	if(contentTask && contentTask.id !== ''){
  		this.props.onOpenForm();
  	}else{
  		this.props.onToggleForm();
  	}
    this.props.onClearTask({
    	id: '',
    	name: '',
    	status: true
    });
 }

  render(){ 

    var isDisplayForm = this.props.isDisplayForm;
    var elmDisplayForm= isDisplayForm ? 
            <TaskForm onSubmit={this.onSubmit} /> : '';

    return(
        <div className="container">
            <h2><strong>QUẢN LÍ CÔNG VIỆC </strong></h2>
            <hr/>

            <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                 {elmDisplayForm}
            </div>

            <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button className="btn btn-primary edit-btn3" 
                        onClick={ this.onDisplayForm }
                >
                        <i className="fas fa-plus"></i>&nbsp;Thêm công việc
                </button><br/>
               
                <Control />

                <div className="clear"/>
                <TaskList />
            </div>
        </div>
      );
  }
}

const mapStateToProps =(state)=>{
  return{
    isDisplayForm: state.form,
    contentTask: state.contentTask
  }
};

const mapDispatchToProps =(dispatch,props) =>{
  return {
        onToggleForm: ()=>{
            dispatch(actions.toggleForm());
        },
        onOpenForm: () =>{
            dispatch(actions.openForm());
        },
        onClearTask: (task) =>{
        	dispatch(actions.updateContent(task));
        }
	}
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
