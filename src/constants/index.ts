import { IDetails, IUser } from '~store/auth/models';

export * from './States';
export * from './Messages';

export const DEFAULT_USER: IUser = {
	firstName: 'John',
	lastName: 'Smith',
	email: 'john@smith.com',
	password: '1q2w3e4r5t',
	id: '1',
};

export const DEFAULT_DETAILS: IDetails = { ...DEFAULT_USER, details: {} };
