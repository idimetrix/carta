import axios from 'axios';

import { ILocation } from '~/store/auth/models';

export const ipApi = async (): Promise<string> => {
	const { data }: any = await axios.get('https://api.ipify.org?format=text');

	return data;
};

export const ipV6Api = async (): Promise<string> => {
	const { data }: any = await axios.get('https://api6.ipify.org?format=text');

	return data;
};

export const locationApi = async (): Promise<ILocation> => {
	const { data }: any = await axios.get('https://ip-api.io/api/json');

	const location: ILocation = {};

	const mapper: any = {
		ip: 'ip',
	};

	Object.keys(data).forEach((key: string): void => {
		const mapped: string = key.trim();

		location[mapper[mapped] || mapped] = data[key];
	});

	return location;
};
