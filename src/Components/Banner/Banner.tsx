import React from "react";
import style from "./Banner.module.css";

type BannerPropsType = {
    startCondition: boolean
    isUserFound: boolean
    isUserFetching: boolean
}

let Banner: React.FC<BannerPropsType> = (props) => {
    let text = props.startCondition ? "Start with searching a GitHub user" : "User not found";
    let icon = props.startCondition ? <i className="fa-solid fa-magnifying-glass"></i> : <i className="fa-solid fa-user-xmark"></i>
    let banner = <div className={style.Container}>
        <div className={style.Icon}>
            {icon}
        </div>
        <div className={style.Text}>
            {text}
        </div>
    </div>
    let loader = <div className={style.Container}>
        <div className={style.Spinner}>
            <i className="fa-solid fa-spinner"></i>
        </div>
    </div>
    return (
        <div className={style.Banner}>
            {props.isUserFetching ? loader : banner}
        </div>
    );
}

export default Banner;