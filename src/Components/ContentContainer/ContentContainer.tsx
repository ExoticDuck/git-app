import React from "react";
import PersonInfo from "../PersonInfo/PersonInfo";
import RepositoriesDisplay from "../RepositoriesDisplay/RepositoriesDisplay";
import style from "./ContentContainer.module.css"

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

export default ContentContainer;