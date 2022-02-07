import React, { Component } from "react";
import * as actions from "./../actions/index";
import { connect } from "react-redux";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
        };
    }
    onHandleChange = (event) => {
        // var target= event.target;
        // var name = target.name;
        // var value = target.value;
        this.setState({
            keyword: event.target.value.toLowerCase(),
        });
    };
    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    };
    render() {
        var { search } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="Nhập từ khóa"
                        value={search}
                        onChange={this.onHandleChange}
                    />
                    <span onClick={this.onSearch} className="input-group-addon">
                        <i className="fas fa-search"></i>&nbsp;Tìm
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actions.searchTaskTool(keyword));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
