import axios from 'axios';
import { ShowLoaderAction, HideLoaderAction } from '../actions/Actions';

 export const axiosInstance = axios.create({
    baseURL: 'https://api.covid19api.com/',
    timeout: 13000,
  });

  export const interceptor = (store: any) => {

  axiosInstance.interceptors.request.use((config) => {
    store.dispatch(ShowLoaderAction);
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  axiosInstance.interceptors.response.use((response) => {
      store.dispatch(HideLoaderAction);
      return response;
    }, (error) => {
      store.dispatch(HideLoaderAction);
      return Promise.reject(error);
    });
  }
