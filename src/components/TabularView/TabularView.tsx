import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TABLE from '../../shared/Table/Table/Table'
import { GetCountriesCasesAction } from '../../actions/Actions';
import { AppStoreState } from '../../Interface/store.interface';
import { TableModel } from '../../Models/TableModel';
import { CountryCasesData } from '../../Interface/service.interface';

const TabularView = () => {
    const isLoading: boolean = useSelector((state: AppStoreState) => state.loaderState.isLoading);
    const tableSelectorData: CountryCasesData[] = useSelector((state: AppStoreState) => state.serviceData.tabularData && state.serviceData.tabularData.data && state.serviceData.tabularData.data.Countries);

    const dispatch = useDispatch(); 

    const [tableData, setTableData]: any = useState([]);
    const [headerColumns, setheaderColumns]:any = useState([]);

    useEffect(() => {      
        dispatch(GetCountriesCasesAction())
    },[dispatch]);

    useEffect(() => {
            const newArray = tableSelectorData && tableSelectorData.map((country: CountryCasesData) => new TableModel(country).getUIFriendlyPropertyNames())
            const headerLabels = newArray && newArray.length && Object.keys(newArray[0]);
            let arr = headerLabels && headerLabels.map((headerLabel: string, index: number) => {
                return {id: index, name: headerLabel, isSortable: true}
            });
            setheaderColumns(arr);
            setTableData(newArray);
  }, [tableSelectorData]);

    return (
        <>
            {isLoading ?
                <TABLE isLoading={true}></TABLE> :
                <TABLE tableData={tableData} headerColumns={headerColumns}></TABLE>}
        </>
    )
}

export default TabularView
