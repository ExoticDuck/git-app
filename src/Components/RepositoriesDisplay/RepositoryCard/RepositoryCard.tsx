import React from "react";
import style from "./RepositoryCard.module.css"

type RepositoryCardPropsType = {
    name: string
    description: string
    html_Url: string
}

let RepositoryCard: React.FC<RepositoryCardPropsType> = ({name, description, html_Url}) => {
    return(
        <div className={style.RepositoryCard}>
            <div className={style.Name}>
                <a href={html_Url} target={"_blank"} rel="noreferrer">{name}</a>
            </div>
            <div className={style.Description}>
                {description}
            </div>
        </div>
    );
}

export default RepositoryCard;