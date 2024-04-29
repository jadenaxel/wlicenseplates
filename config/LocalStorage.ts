import type { IPlates, ParsePlates } from './Types';

import AsyncStorage from '@react-native-async-storage/async-storage';

const GetPlates = async (year?: string): Promise<ParsePlates | any> => {
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
const RemoveHeartPlates = async (item: IPlates): Promise<void> => {
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
const SavePlates = async (state: any): Promise<void> => {
	try {
		const data: any = await AsyncStorage.getItem('plates');
		const parsing: ParsePlates = JSON.parse(data);
		if (parsing === null) await AsyncStorage.setItem('plates', JSON.stringify([state]));
		else await AsyncStorage.setItem('plates', JSON.stringify([...parsing, state]));
	} catch (e: any) {
		console.log(e.message);
	}
};

export default { GetPlates, RemoveHeartPlates, SavePlates };
