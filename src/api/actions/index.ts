import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { IContactData } from '~/store/actions/models';
import { CONTACT } from '~/api/constants';

const baseURL: string = process.env.API_URL;

const api: AxiosInstance = axios.create({
	baseURL,
	timeout: 15 * 1000,
});

api.interceptors.request.use(
	(config: AxiosRequestConfig): AxiosRequestConfig => {
		config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;

		return config;
	}
);

export const contactApi = (data: IContactData): Promise<AxiosResponse> => api.post(CONTACT, data);
