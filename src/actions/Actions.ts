import { ACTIONCONSTANTS } from '../constants/ActionConstants';
import { APICONSTANTS } from '../constants/ApiConstants';

import { axiosInstance } from '../service/httpService';

export const ShowLoaderAction = {type: ACTIONCONSTANTS.SHOW_LOADER};

export const HideLoaderAction = {type: ACTIONCONSTANTS.HIDE_LOADER};

export const GetCountriesCasesAction = () => {
    let data: any;
    return async (dispatch: any) => {
        await axiosInstance.get(APICONSTANTS.getCountriesCaseInfo).then((res: any) => {
            data = res;
        }).catch((err)=> {
            console.log(err);
        })
        dispatch({type: ACTIONCONSTANTS.FETCH_TABLE_DATA, payload: data});
    }
}

export const GetWorldSummaryAction = () => {
    let data: any;
    return async (dispatch: any) => {
        await axiosInstance.get(APICONSTANTS.getWorldSummary).then((res: any) => {
            data = res;
        }).catch((err)=> {
            console.log(err);
        })
        dispatch({type: ACTIONCONSTANTS.FETCH_WORLD_DATA, payload: data});
    }
}