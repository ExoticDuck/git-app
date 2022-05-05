import React from "react";
import Input from "../Input/Input";
import style from "./Header.module.css"
import { connect } from 'react-redux';
import { AppStateType } from "../../Redux/store";
import { getUser } from "../../Redux/UserReducer";
import { getRepositories } from './../../Redux/RepositoriesReducer';

type HeaderPropsType = {
    getUser: (username: string) => void
    getRepositories: (username: string, currentPage: number) => void
}

let Header: React.FC<HeaderPropsType> = (props) => {

    function onSubmitHandler(username: string) {
        debugger
        props.getUser(username);
        props.getRepositories(username, 1);
    }

    return(
        <div className={style.Header}>
            <div className={style.Logo}>
                <i className="fa-brands fa-github"></i>
            </div>
            <Input value="" onSubmit={onSubmitHandler}/>
        </div>
    );
}
let mapDispatchToProps = (state: AppStateType) => {
    return {}
}
let HeaderContainer = connect(mapDispatchToProps, {getUser, getRepositories})(Header);

export default HeaderContainer;