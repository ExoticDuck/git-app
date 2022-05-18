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

let ContentContainer: React.FC<ContentContainerPropsType> = ({startCondition, isUserFetching, isUserFound}) => {
    if(isUserFound && !startCondition && !isUserFetching) {
        return(
            <div className={style.ContentContainer}>
                <PersonInfo/>
                <RepositoriesDisplay/>
            </div>
        );
    }
    return(
        <Banner startCondition={startCondition} isUserFound={isUserFound} isUserFetching={isUserFetching}/>
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

let ConnectedContent = connect(mapStateToProps, {})(ContentContainer);

export default ConnectedContent;