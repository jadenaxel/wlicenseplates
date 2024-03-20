import type { IColor } from './types';
import type { ICountries } from '@/types';

import { Dimensions } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Africa, America, Asia, Australia, Europe } from '@/assets/images/contient';

type ParseCountry = ICountries[] | null;

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

export const GetCountry = async (title?: string) => {
	try {
		const data: any = await AsyncStorage.getItem('country');
		const parsing: ParseCountry = JSON.parse(data);
		if (parsing === null) return;
		const getTitle: ICountries[] = parsing.filter((item: ICountries) => item.title === title);
		if (title) return getTitle;
		else return parsing;
	} catch (e: any) {
		console.log(e.message);
	}
};

export const RemoveHeart = async (item: ICountries): Promise<void> => {
	try {
		const data: any = await AsyncStorage.getItem('country');
		const parsing: ParseCountry = JSON.parse(data);
		if (parsing === null) return;
		const deleteItem: ICountries[] = parsing.filter((items: ICountries) => items.title !== item.title);
		await AsyncStorage.setItem('country', JSON.stringify(deleteItem));
	} catch (e: any) {
		console.log(e.message);
	}
};

export const SaveCountry = async (state: any) => {
	try {
		const data: any = await AsyncStorage.getItem('country');
		const parsing: ParseCountry = JSON.parse(data);
		if (parsing === null) await AsyncStorage.setItem('country', JSON.stringify([state]));
		else await AsyncStorage.setItem('country', JSON.stringify([...parsing, state]));
	} catch (e: any) {
		console.log(e.message);
	}
};
