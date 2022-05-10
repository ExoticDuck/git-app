import React, { useState } from "react";
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
    isFetching: boolean
    getRepositories: (username: string, currentPage: number) => void
}

let RepositoriesDisplay: React.FC<RepositoriesDisplayPropsType> = React.memo((props) => {
    let mappedRepos = props.repositories.map((repo, i) => <RepositoryCard key={i} name={repo.name} description={repo.description} html_Url={repo.html_url} />);
    let pagesCount = Math.ceil(props.repositoriesCount / 4);

    function onPageChangeHandler({ selected }: Selected) {
        props.getRepositories(props.username, ++selected);
        setCurrentPage(selected);
    }

    function getItems(page: number) {
        let lastItem = page * 4;
        let firstItem = lastItem - 3;
        if(lastItem > props.repositoriesCount) {
            lastItem = props.repositoriesCount;
        }
        return `${firstItem} - ${lastItem}`;
    }

    const [currentPage, setCurrentPage] = useState<number>(1)


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
            {props.isFetching &&
                <div className={style.BannerDisplayBlock}>
                    <div className={style.Spinner}>
                        <i className="fa-solid fa-spinner"></i>
                    </div>
                </div>}
            <div className={style.RepositoriesHeader}>
                {`Repositories (${props.repositoriesCount})`}
            </div>
            <div className={style.Repositories}>
                {mappedRepos}
            </div>
            <div className={style.PaginationContainer}>
                <div className={style.ItemsCount}>
                    {getItems(currentPage)} of {props.repositoriesCount} items
                </div>
                <Pagination initialPage={0} pageCount={pagesCount} onChange={onPageChangeHandler} marginPagesDisplayed={2} pageRangeDisplayed={1} />
            </div>
        </div>
    );


});

let mapDispatchToProps = (state: AppStateType) => {
    return {
        repositories: state.repositories.repositoriesList,
        repositoriesCount: state.repositories.repositoriesCount,
        username: state.user.login,
        isFetching: state.repositories.isFetching
    }
}

export default connect(mapDispatchToProps, { getRepositories })(RepositoriesDisplay);