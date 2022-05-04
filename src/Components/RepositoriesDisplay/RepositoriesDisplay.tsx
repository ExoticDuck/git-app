import React from "react";
import style from "./RepositoriesDisplay.module.css"
import { connect } from 'react-redux';
import { AppStateType } from "../../Redux/store";
import { RepositoryType } from "../../Redux/RepositoriesReducer";
import RepositoryCard from "./RepositoryCard/RepositoryCard";

type RepositoriesDisplayPropsType = {
    repositories: RepositoryType[];
}

let RepositoriesDisplay: React.FC<RepositoriesDisplayPropsType> = (props) => {
    let mappedRepos = props.repositories.map(repo => <RepositoryCard name={repo.name} description={repo.description} html_Url={repo.html_url}/>)
    return(
        <div className={style.RepositoriesDisplayBlock}>
            <div>
                {`Repositories (${props.repositories.length})`}
            </div>
            {mappedRepos}
        </div>
    );
}

let mapDispatchToProps = (state: AppStateType) => {
    return {
        repositories: state.repositories
    }
}

export default connect(mapDispatchToProps, {})(RepositoriesDisplay);