import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppAction from '../redux/actions/AppAction'
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';


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
                <TwitterLogin
                    loginUrl="http://localhost:4000/api/v1/auth/twitter"
                    onFailure={this.onFailed}
                    onSuccess={this.onSuccess}
                    requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                />
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
