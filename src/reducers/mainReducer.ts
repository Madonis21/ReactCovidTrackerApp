import { LoadingState, ServiceState } from '../Interface/store.interface'
import {combineReducers} from 'redux';
import { ACTIONCONSTANTS } from '../constants/ActionConstants';

const initialLoadingState: LoadingState = {
    isLoading: false
}

const LoadStateReducer = (state = initialLoadingState, action: any) => {
    switch (action.type) {
        case ACTIONCONSTANTS.SHOW_LOADER:
            return {...state, isLoading: true};
        
        case ACTIONCONSTANTS.HIDE_LOADER: 
            return {...state, isLoading: false};
        
        default:
            return state;
    }
}
const initialServiceState: ServiceState = {
    tabularData: {},
    pieChartData: {}
}

const RetreiveDataReducer = (state = initialServiceState, action: any ) => {
    switch (action.type) {
        case ACTIONCONSTANTS.FETCH_TABLE_DATA:
            return {...state, tabularData: action.payload};
        case ACTIONCONSTANTS.FETCH_WORLD_DATA:
            return {...state, pieChartData: action.payload}
        default: return state;
    }
}

export const masterReducer =combineReducers({
    loaderState: LoadStateReducer,
    serviceData:RetreiveDataReducer})
