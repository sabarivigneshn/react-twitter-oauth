import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppAction from '../redux/actions/AppAction'


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { };
    }

    componentDidMount() {
        alert('=========ssssss', this.props)
    }
    render() {
        console.log('===========props', this.state)
        return (
            <div >
                <h3>Dashboard</h3>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        onActionSuccess: state.AppReducer.onActionSuccess,
        onActionFail: state.AppReducer.onActionFail,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        AppAction: bindActionCreators(AppAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
