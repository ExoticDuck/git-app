import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.css";

export type Selected = {
    selected: number
}

type PagiantionPropsType = {
    initialPage?: number
    marginPagesDisplayed: number
    pageCount: number
    pageRangeDisplayed?: number
    onChange: (value: Selected) => void
}

const Pagination: React.FC<PagiantionPropsType> = (props) => {
    return (
        <ReactPaginate
            initialPage={props.initialPage}
            marginPagesDisplayed={props.marginPagesDisplayed}
            pageCount={props.pageCount}
            pageRangeDisplayed={props.pageRangeDisplayed}
            onPageChange={props.onChange}
            containerClassName={style.Pagination}
            activeClassName={style.PaginationActive}
            pageLinkClassName={style.PaginationPageLink}
            breakLinkClassName={style.PaginationBreakLink}
            nextLinkClassName={style.PaginationNextLink}
            previousLinkClassName={style.PaginationPreviousLink}
            pageClassName={style.PaginationPageItem}
            breakClassName={style.PaginationBreak}
            nextClassName={style.PaginationNextItem}
            previousClassName={style.PaginationPreviousItem}
            renderOnZeroPageCount={() => null}
            previousLabel={
                <>
                    <i className="fa-solid fa-chevron-left"></i>
                </>
            }
            nextLabel={
                <>
                    <i className="fa-solid fa-chevron-right"></i>
                </>
            } />
    );
}

export default Pagination;