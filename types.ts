
export type IColor = {
	[key: string]: string;
};

export type ICard = {
	image: string;
	title: string;
	platesNumber: number;
	countriesQuantity: number;
	description: string;
	countries: [ICountries];
};

export type ICountries = {
	image: string;
	title: string;
	flag: string;
	description: string;
	platesNumber: number;
	continent: [ICard];
	plates: [IPlates];
};

export type IPlates = {
	title: string;
	bg: string;
	year: number;
	image: [string];
	description: string;
	note: string;
	eligibility: string;
	plateType: string;
	categories: any;
};
