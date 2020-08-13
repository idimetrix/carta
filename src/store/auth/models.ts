export interface IUser {
	readonly id: string;
	readonly email: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly name?: string;
	readonly password?: string; // demo only
}

export interface IPermissions {
	readonly notifications?: boolean;
}

export interface IDetails extends IUser {
	readonly details?: any;
}

export interface ILocation {
	readonly ip?: string;
	readonly country_code?: string;
	readonly country_name?: string;
	readonly is_in_european_union?: boolean;
	readonly region_name?: string;
	readonly region_code?: string;
	readonly city?: string;
	readonly zip_code?: string;
	readonly time_zone?: string;
	readonly latitude?: number;
	readonly longitude?: number;
	readonly metro_code?: number;
	readonly organisation?: string;
	readonly flagUrl?: string;
	readonly emojiFlag?: string;
	readonly currencySymbol?: string;
	readonly currency?: string;
	readonly callingCode?: string;
	readonly countryCapital?: string;
	readonly suspiciousFactors?: { isProxy: boolean; isTorNode: boolean; isSpam: boolean; isSuspicious: boolean };
	readonly isProxy?: string;
	readonly isTorNode?: string;
	readonly isSpam?: string;
	readonly isSuspicious?: string;
}

export interface IAuthState {
	readonly error: string;
	readonly loading: boolean;
	readonly token: string;
	readonly user: IUser;
	readonly details: IDetails;
	readonly permissions: IPermissions;
	readonly location: ILocation;
}

// --- Authorization

export interface IAuthorizationData {
	readonly email: string;
	readonly password: string;
	readonly remember?: boolean;
}

export interface IAuthorizationAction {
	readonly payload: IAuthorizationData;
	readonly type: string;
}

// --- Registration

export interface IRegistrationData {
	readonly confirm: string;
	readonly email: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly name?: string;
	readonly password: string;
	readonly promo: string;
	readonly birthday: Date;
	readonly state: string;
	readonly remember?: boolean;
}

export interface IRegistrationAction {
	readonly payload: IRegistrationData;
	readonly type: string;
}

export interface IImageUploadData {
	readonly userId: string;
	readonly contentType: string;
	readonly photoFile: File;
}

export interface IAWSImageUploadData {
	readonly contentType: string;
	readonly imageId: string;
	readonly photoFile: File;
	readonly s3PutObjectURL: string;
}

export interface IImageUploadAction {
	readonly payload: IImageUploadData;
	readonly type: string;
}

// --- Exit

export interface IExitData {
	[key: string]: any;
}

export interface IExitAction {
	readonly payload: IExitData;
	readonly type: string;
}

// --- Permissions

export interface IPermissionsData {
	readonly permissions: IPermissions;
}

export interface IPermissionsAction {
	readonly payload: IPermissionsData;
	readonly type: string;
}

// --- Location

export interface ILocationData {
	readonly location: ILocation;
}

export interface ILocationAction {
	readonly payload: ILocationData;
	readonly type: string;
}

// --- Token

export interface ITokenData {
	example?: any;
}

export interface ITokenAction {
	readonly payload: ITokenData;
	readonly type: string;
}

// --- User

export interface IUserData {
	readonly customerId: string;
}

export interface IUserAction {
	readonly payload?: IUserData;
	readonly type: string;
}

// --- Details

export interface IDetailsData {
	example?: any;
}

export interface IDetailsAction {
	readonly payload?: IDetailsData;
	readonly type: string;
}

// --- Update

export interface IUpdatesData {
	email?: string;
	firstName?: string;
	lastName?: string;
	name?: string;
	password?: string;
}

export interface IUpdatesAction {
	readonly payload: IUpdatesData;
	readonly type: string;
}
