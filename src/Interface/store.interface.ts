export interface LoadingState {
    isLoading: boolean;
}

export interface ServiceState {
    tabularData: any;
    pieChartData: any;
}

export interface AppStoreState {
    loaderState: LoadingState
    serviceData: ServiceState
} 