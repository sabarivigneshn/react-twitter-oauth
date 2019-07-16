import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppAction from '../redux/actions/AppAction'
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { isAuthenticated: false, user: null, token: '' };
    }

    componentDidMount() {
        this.props.AppAction.GetData()
    }

    onSuccess = (response) => {
        console.log('called -----on success')
        const token = response.headers.get('x-auth-token');
        response.json().then(user => {
            if (token) {
                this.setState({ isAuthenticated: true, user: user, token: token });
            }
        });
    };

    onFailed = (error) => {
        alert(error);
    };

    logout = () => {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };

    render() {
        console.log('===========props', this.state)
        return (
            <div >
                {this.state.isAuthenticated ?
                    <div>
                        <p>Authenticated</p>
                        <div>
                            {this.state.user.email}
                        </div>
                        <div>
                            <button onClick={this.logout} className="button" >
                                Log out
                            </button>
                        </div>
                    </div>
                    :
                    <div>
                        <h3>Home Component</h3>
                        <TwitterLogin
                            loginUrl="http://localhost:4000/api/v1/auth/twitter"
                            onFailure={this.onFailed}
                            onSuccess={this.onSuccess}
                            requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                        />
                    </div>
                }
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
