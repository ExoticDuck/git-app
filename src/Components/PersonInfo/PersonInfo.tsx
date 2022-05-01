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
    return(
        <div className={style.PersonInfoBlock}>
            <div>
                <img src={props.avatarUrl} alt="avatar"/>
            </div>
            <div>
                {props.name}
                {props.username}
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