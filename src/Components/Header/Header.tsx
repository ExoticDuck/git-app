import React from "react";
import Input from "../Input/Input";
import style from "./Header.module.css"
import { connect } from 'react-redux';
import { AppStateType } from "../../Redux/store";
import { getUser } from "../../Redux/UserReducer";

type HeaderPropsType = {
    getUser: (username: string) => void
}

let Header: React.FC<HeaderPropsType> = (props) => {
    return(
        <div className={style.Header}>
            <div className={style.Logo}>
                <i className="fa-brands fa-github"></i>
            </div>
            <Input value="" onSubmit={props.getUser}/>
        </div>
    );
}
let mapDispatchToProps = (state: AppStateType) => {
    return {}
}
let HeaderContainer = connect(mapDispatchToProps, {getUser})(Header);

export default HeaderContainer;