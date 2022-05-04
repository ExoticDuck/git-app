import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/store";
import { getUser } from "../../Redux/UserReducer";
import style from "./PersonInfo.module.css"

type PersonInfoPropsType = {
    avatarUrl: string,
    htmlUrl: string,
    name: string | null,
    username: string,
    followers: number,
    following: number
}

let PersonInfo: React.FC<PersonInfoPropsType> = (props) => {
    return (
        <div className={style.PersonInfoBlock}>
            <div className={style.AvatarBlock}>
                <img src={props.avatarUrl} alt="avatar" className={style.Avatar} />
            </div>
            <div className={style.PersonInfo}>
                <div className={style.Name}>{props.name}</div>
                <div className={style.Username}><a href={props.htmlUrl} target="_blank" rel="noreferrer">{props.username}</a></div>
            </div>
            <div className={style.FollowBar}>
                <div className={style.Followers}>
                    <i className="fa-solid fa-user-group"></i>
                    {props.followers} followers
                </div>
                <div className={style.Following}>
                    <i className="fa-solid fa-user"></i>
                    {props.following} following
                </div>
            </div>
        </div>
    );
}

type mapStateToPropsType = {
    avatarUrl: string,
    htmlUrl: string,
    name: string | null,
    username: string,
    followers: number,
    following: number
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        avatarUrl: state.user.avatar_url,
        htmlUrl: state.user.html_url,
        name: state.user.name,
        username: state.user.login,
        followers: state.user.followers,
        following: state.user.following
    }
}
let PersonInfoContainer = connect(mapStateToProps, {})(PersonInfo)

export default PersonInfoContainer;