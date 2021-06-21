import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component{
  
  onSort=(sortBy,sortValue)=>{
  		this.props.onSort({
  			sortBy:sortBy,
  			sortValue:sortValue
  		});
  }
  render(){
  	var {sortBy,sortValue} = this.props.sort;
    return(
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="btn-group">
			    <button type="button" 
			    		className="btn btn-primary edit-btn4 dropdown-toggle" 
			    		data-toggle="dropdown">
			    		<span className="fas fa-sort"></span>&nbsp;
			    		Sắp xếp 
			    </button>
			    <ul className="dropdown-menu" role="menu">
				      <li onClick={ ()=>{this.onSort('name',1)} }>
				      		<span  
				      			className={(sortBy==='name' && sortValue === 1) 
				      			? 'sort_selected' : ''}
				      			role="button"
				      		>
				      			<i className="fas fa-sort-alpha-down"></i>&nbsp;Tên A-Z
				      		</span>
				      </li>
				      <li onClick={ ()=>{this.onSort('name',-1)} }>
				      		<span  
				      			className={(sortBy==='name' && sortValue === -1) 
				      			? 'sort_selected' : ''}
				      			role="button"
				      		>
				      			<i className="fas fa-sort-alpha-down-alt"></i>&nbsp;Tên Z-A
				      		</span>
				      </li>
				      <li className="divider"></li>
				      <li onClick={ ()=>{this.onSort('status',1)} }>
				      		<span  
				      			className={(sortBy==='status' && sortValue === 1) 
				      			? 'sort_selected' : ''}
				      			role="button"
				      		>
				      			Trạng thái kích hoạt
				      		</span>
				      </li>
				      <li onClick={ ()=>{this.onSort('status',-1)} }>
				      		<span  
				      			className={(sortBy==='status' && sortValue === -1) 
				      			? 'sort_selected' : ''}
				      			role="button"
				      		>
				      			Trạng thái ẩn
				      		</span>
				      </li>
			    </ul>
			</div>
        </div>
      );
  }
}

const mapStateToProps=(state)=>{
	return{
		sort: state.sortTool
	}
}

const mapDispatchToProps=(dispatch,props)=>{
	return{
		onSort: (sort)=>{
			dispatch(actions.sortTaskTool(sort));
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Sort);
