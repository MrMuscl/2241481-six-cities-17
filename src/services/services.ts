import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

const BASE_URL = 'https://16.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers){
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response, (error: AxiosError<DetailMessageType>) => {
      if(error.response && shouldDisplayError(error.response)){
        const detailMessage = error.response.data;
        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};

export {createAPI};
