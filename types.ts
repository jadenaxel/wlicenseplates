export type IColor = {
	[key: string]: string;
};

export type ICard = {
	image: any;
	title: string;
	platesNumber: number;
	countriesQuantity: number;
	description: string;
	countries: [ICountries] | any;
};

export type ICountries = {
	image: any;
	title: string;
	flag: any;
	description: string;
	platesNumber: number;
	continent: [ICard];
	plates: [IPlates];
};

export type IPlates = {
	title: string;
	bg: any;
	year: number;
	image: any;
	description: string;
	note: string;
	eligibility: string;
	plateType: string;
	categories: any;
};

export type SVGProps = {
	name: string;
	ele: any;
	height: number;
	width: number;
};

export type Filter = {
	title: string;
	isSelected: string;
};

export type Props = {
	type?: string;
	uri: string;
	dispatch?: any;
	dispatchType?: any;
};

export type Return = {
	data: any[];
	error: any[];
	isLoading: boolean;
};
