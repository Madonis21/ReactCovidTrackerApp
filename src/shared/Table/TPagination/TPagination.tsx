import React from 'react';
import cssModuleStyles from '../../../app.module.css';

export interface IProps {
    pageNumber: number;
    totalPages: number;
    changeToPrev: any;
    changeToNext: any;
} 

const TPagination = ({pageNumber, totalPages, changeToPrev, changeToNext}: IProps) => {

return (
    <div className={cssModuleStyles.paginationContainer}>
        <button className={cssModuleStyles.paginationButton} onClick={() => changeToPrev()} disabled={pageNumber === 1}>Previous</button>
        <label>Showing {pageNumber} of {totalPages}</label>
        <button className={cssModuleStyles.paginationButton} onClick={() => changeToNext()} disabled={pageNumber === totalPages}>Next</button>
    </div>
)

}

export default TPagination;

