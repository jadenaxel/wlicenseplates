import type { IColor } from './types';

import { Dimensions } from 'react-native';

import { Africa, America, Asia, Australia, Europe } from '@/assets/images/contient';

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
