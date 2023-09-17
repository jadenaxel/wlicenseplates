export interface IColor {
	[key: string]: string;
}
export interface ICard {
	image: string;
	icons: string;
	title: string;
	platesNumber: number;
	countriesQuantity: number;
	description: string;
	countries: [ICountries];
}

export interface ICountries {
	image: string;
	title: string;
	platesNumber: number;
}
