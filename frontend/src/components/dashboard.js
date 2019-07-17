import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppAction from '../redux/actions/AppAction'
import Header from './header'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: {},
            isGetUserDetails: false,
            isGetFollowersList: false,
            followersList: []
        };
    }

    componentDidMount() {
        this.setState({
            isGetUserDetails: true,
            isGetFollowersList: true
        })
        let screenName = this.props.userDetails.screenName
        this.props.AppAction.getUserDetails(screenName)
        this.props.AppAction.getFollowersList(screenName)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.onGetUserDetailsSuccess != undefined && prevState.isGetUserDetails) {
            return {
                userData: nextProps.onGetUserDetailsSuccess,
                isGetUserDetails: false
            }
        }

        if (nextProps.onGetFollowersListSuccess != undefined && prevState.isGetFollowersList) {
            return {
                followersList: nextProps.onGetFollowersListSuccess.users,
                isGetFollowersList: false
            }
        }
        return null

    }

    render() {
        const { userData, followersList } = this.state
        return (
            <div >
                <Header
                    userData={userData}
                    logout={this.props.logout} />
                <div className="container mt-4">
                    <h3>Followers</h3>
                    <div className="row">
                        {followersList.length ?
                            followersList.map(follower => {
                                return (
                                    <div className="col-lg-3 mt-3" key={follower.id}>
                                        <div className="card">
                                            <img className="card-img-top" src={follower.profile_image_url} alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="text-capitalize">{follower.name}</h4>
                                                <h6 className="text-black-50">{follower.screen_name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                            :
                            <div>
                            </div>
                        }
                    </div>

                    {followersList.length === 0 &&
                        <div className="mt-5">
                            <h4 className="text-center">No Followers Yet!</h4>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        onGetUserDetailsSuccess: state.AppReducer.onGetUserDetailsSuccess,
        onGetUserDetailsFail: state.AppReducer.onGetUserDetailsFail,
        onGetFollowersListSuccess: state.AppReducer.onGetFollowersListSuccess,
        onGetFollowersListFail: state.AppReducer.onGetFollowersListFail

    }
}

function mapDispatchToProps(dispatch) {
    return {
        AppAction: bindActionCreators(AppAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
