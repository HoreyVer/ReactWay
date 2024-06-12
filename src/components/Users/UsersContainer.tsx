import React from 'react';
import {RootState} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    followSuccess,
    UserType, getUsers, follow, unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


type UsersType = {
    users: Array<UserType>,
    unfollowSuccess: (userId: number) => void,
    followSuccess: (userId: number) => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean,
    followingProgress: Array<number>,
    toggleFollowingProgress: (isFollowingProgress: boolean, userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

class UsersContainer extends React.Component<UsersType, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   followSuccess={this.props.followSuccess}
                   unfollowSuccess={this.props.unfollowSuccess}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
                   followingProgress={this.props.followingProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default connect(mapStateToProps, {
        unfollowSuccess,
        followSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        follow,
        unfollow

    }
)(UsersContainer)
