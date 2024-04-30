type IColor = {
	[key: string]: string;
};
type ICard = {
	image: any;
	title: string;
	platesNumber: number;
	countriesQuantity: number;
	description: string;
	countries: [ICountries] | any;
};
type ICountries = {
	image: any;
	title: string;
	flag: any;
	description: string;
	platesNumber: number;
	continent: [ICard];
	plates: [IPlates];
};
type IPlates = {
    _id: string;
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
type SVGProps = {
	name: string;
	ele: any;
	height: number;
	width: number;
};
type Filter = {
	title: string;
	isSelected: string;
};
type Props = {
	type?: string;
	uri: string;
	dispatch?: any;
	dispatchType?: any;
};
type Return = {
	data: any[];
	error: any[];
	isLoading: boolean;
};
type ParsePlates = IPlates[] | null;

export type { IColor, ICard, ICountries, IPlates, SVGProps, Filter, Props, Return, ParsePlates };
