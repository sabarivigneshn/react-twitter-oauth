import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppAction from '../redux/actions/AppAction'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        const userData = this.props.userData
        return (
            <div >
                <nav className="header-page navbar navbar-light bg-light shadow-sm">
                    <a className="navbar-brand" href="#">React Twitter Oauth</a>
                    <div className="nav-item dropdown header-link show">
                        <Link to="/" className="dropdown-toggle text-capitalize p-0" style={{textDecoration: "none"}}
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <Avatar
                                src={userData.profile_image_url}
                                round={true}
                                size="40" />
                            &nbsp;<span className="dark-bg">{userData.name}
                            </span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right header-dropdown" aria-labelledby="navbarDropdown" >
                            <Link to="#" className="dropdown-item" onClick={this.props.logout}>Log out</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        onGetUserDetailsSuccess: state.AppReducer.onGetUserDetailsSuccess,
        onGetUserDetailsFail: state.AppReducer.onGetUserDetailsFail,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        AppAction: bindActionCreators(AppAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
