import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppAction from '../redux/actions/AppAction'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.AppAction.GetData()
    }

    render() {
        console.log('===========props', this.props)
        return (
            <div >
                <h3>Home Component</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
