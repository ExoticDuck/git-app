import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.css";

type Selected = {
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
            containerClassName="Pagination"
            activeClassName="PaginationActive"
            pageLinkClassName="PaginationPageLink"
            breakLinkClassName="PaginationBreakLink"
            nextLinkClassName="PaginationNextLink"
            previousLinkClassName="PaginationPreviousLink"
            pageClassName="PaginationPageItem"
            breakClassName="PaginationBreak"
            nextClassName="PaginationNextItem"
            previousClassName="PaginationPrevious Item"
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