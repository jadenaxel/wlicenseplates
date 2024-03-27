import type { IColor, IPlates } from './types';

import { Dimensions } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Africa, America, Asia, Australia, Europe } from '@/assets/images/contient';

type ParsePlates = IPlates[] | null;

export const elements: any = { Africa, America, Asia, Australia, Europe };

// Getting dimensions
export const WindowWidth: number = Dimensions.get('window').width;
export const WindowHeight: number = Dimensions.get('window').height;

// Gap size
export const paddingHorizontal: number = 16;

// Tablet size
export const tableWidth: number = 450;

export const SCREEN_SIZE_COMPARATION: boolean = WindowWidth >= tableWidth;

//This code is used to define a set of colors that can be used in other parts of the code.
export const Color: IColor = {
	black: '#000000',
	red: '#FF1464',
	gray: '#D6D6D6',
	white: '#FFFFFF',
};

export const GetPlates = async (year?: string): Promise<ParsePlates | any> => {
	try {
		const data: any = await AsyncStorage.getItem('plates');
		const parsing: ParsePlates = JSON.parse(data);
		if (parsing === null) return [];
		const getTitle: ParsePlates = parsing.filter((item: any) => item.year === year);
		if (year) return getTitle;
		else return parsing;
	} catch (e: any) {
		console.log(e.message);
	}
};

export const RemoveHeartPlates = async (item: IPlates): Promise<void> => {
	try {
		const data: any = await AsyncStorage.getItem('plates');
		const parsing: ParsePlates = JSON.parse(data);
		if (parsing === null) return;
		const deleteItem: IPlates[] = parsing.filter((items: IPlates) => items.title !== item.title);
		await AsyncStorage.setItem('plates', JSON.stringify(deleteItem));
	} catch (e: any) {
		console.log(e.message);
	}
};

export const SavePlates = async (state: any): Promise<void> => {
	try {
		const data: any = await AsyncStorage.getItem('plates');
		const parsing: ParsePlates = JSON.parse(data);
		if (parsing === null) await AsyncStorage.setItem('plates', JSON.stringify([state]));
		else await AsyncStorage.setItem('plates', JSON.stringify([...parsing, state]));
	} catch (e: any) {
		console.log(e.message);
	}
};

export const DataFilterSorted = (data: any, ALL: string) => {
	const FilterAllTitle = data.filter((item: any) => item.title === ALL);
	const FilterOtherTitle = data.filter((item: any) => item.title !== ALL);

	return [...FilterAllTitle, ...FilterOtherTitle];
};

export const filterPlates = (plates: any, filter: any, ALL: string) => {
	if (filter === ALL) return plates;

	return plates.filter((plate: any) => {
		return plate.categories.some((cat: any) => cat.title === filter);
	});
};
