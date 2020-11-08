import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { PieChartOptions } from '../../constants/ChartConfigConstants';
import { useDispatch, useSelector } from 'react-redux';
import WorldCaseInfo from './WorldCaseInfo';
import { AppStoreState } from '../../Interface/store.interface';
import { GetWorldSummaryAction } from '../../actions/Actions';
import { WorldSummaryData } from '../../Interface/service.interface';
import Loader from '../../shared/Loader/Loader';

const WorldView = () => {
    const isLoading: boolean = useSelector((state: AppStoreState) => state.loaderState.isLoading);
    const worldSummarySelectorData: WorldSummaryData = useSelector((state: AppStoreState) => state.serviceData.pieChartData && state.serviceData.pieChartData && state.serviceData.pieChartData.data);
    const dispatch = useDispatch();    

    const [options, setOptions] = useState(PieChartOptions);
    const [totalCases, setTotalCases] = useState(0);

    useEffect(() => {   
        dispatch(GetWorldSummaryAction())
    },[dispatch])


    useEffect(() => {
        if (worldSummarySelectorData) {
            let data: any = [];
            const newOptions = JSON.parse(JSON.stringify(options));
            const { TotalConfirmed, TotalDeaths, TotalRecovered } = worldSummarySelectorData;
            const TotalActive = TotalConfirmed - (TotalDeaths + TotalRecovered);

            data = [
                { name: 'Deaths', y: (TotalDeaths / TotalConfirmed) * 100, color: 'red' },
                { name: 'Recovered', y: (TotalRecovered / TotalConfirmed) * 100, color: 'green' },
                { name: 'Active', y: (TotalActive / TotalConfirmed) * 100, color: 'grey' }
            ];

            newOptions.series[0].data = data;

            setOptions(newOptions)

            setTotalCases(TotalConfirmed);
        }

      }, [worldSummarySelectorData])

    return (
        <>
            {isLoading ? <Loader></Loader> :
            <div>
                <WorldCaseInfo totalCases={totalCases}></WorldCaseInfo>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            }
        </>
    )
}

export default WorldView