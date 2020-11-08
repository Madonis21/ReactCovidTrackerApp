import React, { useState } from 'react';

export interface Column {
    id: number;
    name: string;
    isSortable: boolean;    
}

interface IProps {
    headerColumns: Column[];
    sortHandler: any;
}

const THEAD = ({headerColumns, sortHandler}: IProps) => {

    const [sortByDesc, setSortByDesc] = useState(true);

    return (
        <thead>
            <tr>
                {headerColumns && headerColumns.length ? headerColumns.map((column: Column, index: number) => {
                    return (
                        <th key={index}
                        onClick={() => {
                            setSortByDesc(!sortByDesc);
                            return sortHandler(column.name, sortByDesc)
                        }}>{column.name}</th>
                    )
                }): null}
            </tr>
        </thead>
    )
}

export default THEAD;