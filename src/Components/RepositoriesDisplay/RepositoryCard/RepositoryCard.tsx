import React from "react";
import style from "./RepositoryCard.module.css"

type RepositoryCardPropsType = {
    name: string
    description: string
    html_Url: string
}

let RepositoryCard: React.FC<RepositoryCardPropsType> = (props) => {
    return(
        <div className={style.RepositoryCard}>
            <div className={style.Name}>
                <a href={props.html_Url} target={"_blank"} rel="noreferrer">{props.name}</a>
            </div>
            <div className={style.Description}>
                {props.description}
            </div>
        </div>
    );
}

export default RepositoryCard;