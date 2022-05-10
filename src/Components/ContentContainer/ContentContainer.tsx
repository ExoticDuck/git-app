import React from "react";
import PersonInfo from "../PersonInfo/PersonInfo";
import RepositoriesDisplay from "../RepositoriesDisplay/RepositoriesDisplay";
import style from "./ContentContainer.module.css"
import { connect } from 'react-redux';
import { AppStateType } from "../../Redux/store";
import Banner from "../Banner/Banner";

type ContentContainerPropsType = {
    startCondition: boolean
    isUserFound: boolean
    isUserFetching: boolean
}

let ContentContainer: React.FC<ContentContainerPropsType> = (props) => {
    if(props.isUserFound && !props.startCondition && !props.isUserFetching) {
        return(
            <div className={style.ContentContainer}>
                <PersonInfo/>
                <RepositoriesDisplay/>
            </div>
        );
    }
    return(
        <Banner startCondition={props.startCondition} isUserFound={props.isUserFound} isUserFetching={props.isUserFetching}/>
    );
}

type MapStateToPropsType = {
    startCondition: boolean
    isUserFound: boolean
    isUserFetching: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        startCondition: state.appCondition.startCondition,
        isUserFound: state.appCondition.isUserFound,
        isUserFetching: state.appCondition.isUserFetching
    }
}

export default connect(mapStateToProps, {})(ContentContainer);