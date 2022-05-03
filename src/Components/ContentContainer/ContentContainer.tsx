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
}

let ContentContainer: React.FC<ContentContainerPropsType> = (props) => {
    if(props.isUserFound && !props.startCondition) {
        return(
            <div className={style.ContentContainer}>
                <PersonInfo/>
                <RepositoriesDisplay/>
            </div>
        );
    }
    return(
        <Banner startCondition={props.startCondition} isUserFound={props.isUserFound}/>
    );
        
    // return(
    //     <div className={style.ContentContainer}>
    //         <PersonInfo/>
    //         <RepositoriesDisplay/>
    //     </div>
    // );
}

type MapDispatchToPropsType = {
    startCondition: boolean
    isUserFound: boolean
}

let mapDispatchToProps = (state: AppStateType): MapDispatchToPropsType => {
    return {
        startCondition: state.appCondition.startCondition,
        isUserFound: state.appCondition.isUserFound
    }
}

export default connect(mapDispatchToProps, {})(ContentContainer);