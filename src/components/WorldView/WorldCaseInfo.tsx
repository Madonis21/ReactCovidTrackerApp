import React from 'react';

const WorldCaseInfo = ({totalCases}: any) => {
    return (
        <div>
            <h3>Total Patients</h3>
            <h1>{totalCases.toLocaleString()}</h1>
        </div>
    )

}

export default WorldCaseInfo;