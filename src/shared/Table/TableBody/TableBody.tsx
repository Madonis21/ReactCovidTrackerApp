import React from 'react';

interface Row {
    Country: string
    CountryCode: string
    Date: Date
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: number
    Slug: string
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}

interface IProps {
    rows: Row[];
}


const TBODY = ({rows}: IProps) => {
    return (
        <tbody>
                {rows && rows.length ? rows.map((row: any, rowIndex: number) => {
                    return (
                        <tr key={rowIndex}>
                        {Object.values(row).map((th: any, valIndex: number) => {
                            return (
                                typeof th !== "object" ?
                                <td key={valIndex}>
                                    {th}
                                </td> : null
                            )
                        })}
                        </tr>

                    )
                }): null}
        </tbody>
    )
}

export default TBODY;