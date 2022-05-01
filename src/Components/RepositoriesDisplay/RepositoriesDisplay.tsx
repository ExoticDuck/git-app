import React from "react";
import style from "./RepositoriesDisplay.module.css"
import { connect } from 'react-redux';
import { AppStateType } from "../../Redux/store";

type RepositoriesDisplayPropsType = {

}

let RepositoriesDisplay: React.FC<RepositoriesDisplayPropsType> = (props) => {
    return(
        <div className={style.RepositoriesDisplayBlock}>
            Repos
        </div>
    );
}

let mapDispatchToProps = (state: AppStateType) => {
    return {}
}

let RepositoriesDisplayContainer = connect(mapDispatchToProps, {})(RepositoriesDisplay);

export default RepositoriesDisplay;