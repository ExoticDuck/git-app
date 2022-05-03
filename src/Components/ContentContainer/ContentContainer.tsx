import React from "react";
import PersonInfo from "../PersonInfo/PersonInfo";
import RepositoriesDisplay from "../RepositoriesDisplay/RepositoriesDisplay";
import style from "./ContentContainer.module.css"
import { connect } from 'react-redux';
import { AppStateType } from "../../Redux/store";

type ContentContainerPropsType = {
    
}

let ContentContainer: React.FC<ContentContainerPropsType> = (props) => {
    return(
        <div className={style.ContentContainer}>
            <PersonInfo/>
            <RepositoriesDisplay/>
        </div>
    );
}

let mapDispatchToProps = (state: AppStateType) => {
    return {
        
    }
}

export default connect(mapDispatchToProps, {})(ContentContainer);