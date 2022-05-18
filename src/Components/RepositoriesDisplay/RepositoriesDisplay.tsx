import React, { useCallback, useState } from "react";
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

let RepositoriesDisplay: React.FC<RepositoriesDisplayPropsType> = React.memo(({repositories, username, repositoriesCount, isFetching, getRepositories}) => {
    let mappedRepos = repositories.map((repo, i) => <RepositoryCard key={i} name={repo.name} description={repo.description} html_Url={repo.html_url} />);
    let pagesCount = Math.ceil(repositoriesCount / 4);

    const [currentPage, setCurrentPage] = useState<number>(1)

    let onPageChangeHandler = useCallback(({ selected }: Selected) => {
        getRepositories(username, ++selected);
        setCurrentPage(selected);
    },[username, getRepositories]);

    function getItems(page: number) {
        let lastItem = page * 4;
        let firstItem = lastItem - 3;
        if(lastItem > repositoriesCount) {
            lastItem = repositoriesCount;
        }
        return `${firstItem} - ${lastItem}`;
    }

    if (!repositories.length) {
        return (
            <div className={style.EmptyDisplayBlock}>
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
            {isFetching &&
                <div className={style.BannerDisplayBlock}>
                    <div className={style.Spinner}>
                        <i className="fa-solid fa-spinner"></i>
                    </div>
                </div>}
            <div className={style.RepositoriesHeader}>
                {`Repositories (${repositoriesCount})`}
            </div>
            <div className={style.Repositories}>
                {mappedRepos}
            </div>
            <div className={style.PaginationContainer}>
                <div className={style.ItemsCount}>
                    {getItems(currentPage)} of {repositoriesCount} items
                </div>
                <Pagination initialPage={0} pageCount={pagesCount} onChange={onPageChangeHandler} marginPagesDisplayed={1} pageRangeDisplayed={3} />
            </div>
        </div>
    );


});

type MapStateToPropsType = {
    repositories: RepositoryType[]
    username: string
    repositoriesCount: number
    isFetching: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        repositories: state.repositories.repositoriesList,
        repositoriesCount: state.repositories.repositoriesCount,
        username: state.user.login,
        isFetching: state.repositories.isFetching
    }
}

let RepositoriesDisplayContainer = connect(mapStateToProps, { getRepositories })(RepositoriesDisplay);

export default RepositoriesDisplayContainer