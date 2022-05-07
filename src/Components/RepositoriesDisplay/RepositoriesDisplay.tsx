import React from "react";
import style from "./RepositoriesDisplay.module.css"
import { connect } from 'react-redux';
import { AppStateType } from "../../Redux/store";
import { getRepositories, RepositoryType } from "../../Redux/RepositoriesReducer";
import RepositoryCard from "./RepositoryCard/RepositoryCard";
import Pagination, { Selected } from "../Pagination/Pagination";

type RepositoriesDisplayPropsType = {
    repositories: RepositoryType[]
    username: string
    repositoriesCount: number
    getRepositories: (username: string, currentPage: number) => void
}

let RepositoriesDisplay: React.FC<RepositoriesDisplayPropsType> = (props) => {
    let mappedRepos = props.repositories.map(repo => <RepositoryCard name={repo.name} description={repo.description} html_Url={repo.html_url} />);
    let pagesCount = Math.ceil(props.repositoriesCount / 4);

    function onPageChangeHandler({ selected }: Selected) {
        props.getRepositories(props.username, selected + 1);
    }

    if (!props.repositories.length) {
        return (
            <div className={style.BannerDisplayBlock}>
                <div className={style.Banner}>
                    <div className={style.Icon}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    Repository list is empty
                </div>
            </div>
        );
    }

    return (
        <div className={style.RepositoriesDisplayBlock}>
            <div className={style.RepositoriesHeader}>
                {`Repositories (${props.repositoriesCount})`}
            </div>
            <div className={style.Repositories}>
                {mappedRepos}
            </div>
            <Pagination initialPage={0} pageCount={pagesCount} onChange={onPageChangeHandler} marginPagesDisplayed={2} pageRangeDisplayed={1} />
        </div>
    );
}

let mapDispatchToProps = (state: AppStateType) => {
    return {
        repositories: state.repositories.repositoriesList,
        repositoriesCount: state.repositories.repositoriesCount,
        username: state.user.login
    }
}

export default connect(mapDispatchToProps, { getRepositories })(RepositoriesDisplay);