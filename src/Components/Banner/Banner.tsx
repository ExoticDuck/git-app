import React from "react";
import style from "./Banner.module.css";
import { connect } from 'react-redux';
import { AppStateType } from "../../Redux/store";

type BannerPropsType = {
    startCondition: boolean
    isUserFound: boolean
}

let Banner: React.FC<BannerPropsType> = (props) => {
    let text = props.startCondition ? "Start with searching a GitHub user" : "User not found";
    let icon = props.startCondition ? <i className="fa-solid fa-magnifying-glass"></i> : <i className="fa-solid fa-user-xmark"></i>
    return (
        <div className={style.Banner}>
            <div className={style.Container}>
                <div className={style.Icon}>
                    {icon}
                </div>
                <div className={style.Text}>
                    {text}
                </div>
            </div>
        </div>
    );
}

let mapDispatchToProps = (state: AppStateType) => {
    return {}
}

let RepositoriesDisplayContainer = connect(mapDispatchToProps, {})(Banner);

export default Banner;