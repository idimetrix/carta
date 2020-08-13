export default class Watcher {
	public static error: string = 'Geo location not supported';

	public static async position(): Promise<Position> {
		return new Promise((resolve: (value: Position) => void, reject: (reason: PositionError) => void): void => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position: Position): void => resolve(position),
					(positionError: PositionError): void => reject(positionError)
				);
			} else {
				reject({ message: this.error } as any);
			}
		});
	}

	public static async watch(): Promise<Position> {
		return new Promise((resolve: (value: Position) => void, reject: (reason: PositionError) => void): void => {
			if (navigator.geolocation) {
				navigator.geolocation.watchPosition(
					(position: Position): void => resolve(position),
					(positionError: PositionError): void => reject(positionError)
				);
			} else {
				reject({ message: this.error } as any);
			}
		});
	}
}
