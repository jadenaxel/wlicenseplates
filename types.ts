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
	flag: string;
	description: string;
	platesNumber: number;
	plates: [IPlates];
}

export interface IPlates {
	title: string;
	bg: string;
	year: number;
	image: [string];
	description: string;
	note: string;
	eligibility: string;
    plateType: string;
	categories: any;
}
