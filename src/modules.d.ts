interface Window {
	gidxBuildSteps: boolean;
	gidxContainer: HTMLDivElement;
	gidxErrorReport: any;
	gidxNextStep: any;
	gidxServiceSettings: any;
	gidxServiceStatus: any;
}

declare namespace NodeJS {
	export interface ProcessEnv {
		API_URL: string;
		APP_DEBUG: boolean;
		APP_NAME: string;
		APP_URL: string;

		CHALKLINE_API_KEY: string;
		TSEVO_ACTIVITY_ID: string;
		TSEVO_API_KEY: string;
		TSEVO_API_URL: string;
		TSEVO_CALLBACK_URL: string;
		TSEVO_DEVICE_ID: string;
		TSEVO_MERCHANT_ID: string;
		TSEVO_PRODUCT_ID: string;
	}
}
