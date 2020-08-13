import moment from 'moment-timezone';

export default class Helpers {
	public static getEDTDate = (date: string, format: string = 'MMMM DD, hh:mm A z'): string => {
		try {
			return moment(date)
				.tz(process.env.DISPLAY_TIMEZONE || moment.tz.guess())
				.format(format);
		} catch (e) {
			return moment(date).format(format);
		}
	};
}
