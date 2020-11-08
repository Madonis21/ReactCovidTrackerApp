import React, { useEffect, useState } from 'react';
import THEAD from '../TableHead/TableHead';
import TBODY from '../TableBody/TableBody';
import TPAGINATION from '../TPagination/TPagination';

import './Table.css';

const TABLE = ({ tableData, isLoading, headerColumns}: any) => {

    const LoadingTable = () => {
        const [changedTableData, setTableData] = useState(tableData);
        const [currentPage, changeCurrentPage] = useState(1);
        const [totalPages, changeTotalPages] = useState(1);
        let maxCount = 15;

        const changeTableData = (pageNo = 1) => {
            let pageData = tableData && tableData.slice((pageNo -1) * maxCount, pageNo *maxCount);        
            setTableData(pageData);
        }

        useEffect(() => {
            const noOfRows = changedTableData && changedTableData.length;
            const totalPagesCalculated = noOfRows % maxCount ?  Math.floor(noOfRows/maxCount) + 1 : Math.floor(noOfRows/maxCount);
            changeTotalPages(totalPagesCalculated);
            changeTableData();
            
        }, [])

        if (isLoading) {
            return <table className="table-layout loading-placeholder">
                <thead>
                    <tr className="animated-background">
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {[1,2,3,4,5,6,7,8,9,10].map((i: any, index: number) => {
                        return (
                            <tr key={index} className={index% 2 !== 0 ? 'animated-background': '' }>
                                <td></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        } else {
            

            const sortHandler = (colName: string, sortByDesc: boolean) => {
                const number = sortByDesc ? -1 : 1;
                const myData = JSON.parse(JSON.stringify(changedTableData));
                let sortAlphabetically = false;
                if (typeof changedTableData[0][colName] === 'string') {
                    sortAlphabetically = true;
                }
                myData.sort((a: any,b: any) => {
                    if (sortAlphabetically) {
                        return a[colName] === b[colName] ? 0 : a[colName] > b[colName] ? number : -number;
                    } else {
                        return sortByDesc ? (a[colName] - b[colName]) : (b[colName] - a[colName]);
                    }
                })
                setTableData(myData);
              
            }

            const changeToPrev = () => {
                let currentSelectedPage = currentPage;
                changeTableData(currentPage - 1);
                changeCurrentPage(currentSelectedPage - 1);
            }

            const changeToNext =() => {
                let currentSelectedPage = currentPage;
                changeTableData(currentPage + 1);
                changeCurrentPage(currentSelectedPage + 1);

            }


            return (
            <>    
                    <table className="table-layout">
                        <THEAD headerColumns={headerColumns} sortHandler={(colName: string, sortByDesc: boolean) => sortHandler(colName, sortByDesc)}></THEAD>
                        <TBODY rows={changedTableData}></TBODY>
                    </table>
                    <TPAGINATION
                        pageNumber={currentPage}
                        totalPages={totalPages}
                        changeToPrev={() => changeToPrev()}
                        changeToNext={() => changeToNext()}
                    ></TPAGINATION>
                </>
            )
        }
    }

    return (
        <LoadingTable></LoadingTable>
    )
}

export default TABLE;