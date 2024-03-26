import type { FC } from 'react';
import type { ICard, SVGProps } from '../types';

import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import { Color, SCREEN_SIZE_COMPARATION, WindowHeight, WindowWidth, elements } from '@/config';

import { ArrowChvronRight } from '@/assets/images/icons';

export const SVGIcon = ({ name, ele, width, height }: SVGProps): JSX.Element | null => {
	const Component: any = ele[name];
	return Component ? <Component width={width} height={height} /> : null;
};

const ARROW_WIDTH_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 40 : 10;
const ARROW_HEIGHT_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowHeight / 40 : 10;

const Card: FC<ICard> = ({ title, image, countries }: ICard): JSX.Element => {
	const TOTAL_PLATES: number = countries?.reduce((acc: any, country: any) => acc.plates.length + country.plates.length);
	const PLATES_LESS: number = countries?.map((acc: any) => acc.plates.length)[0];

	const PLATES_VALIDATION: number = TOTAL_PLATES !== undefined && typeof TOTAL_PLATES === 'number' ? TOTAL_PLATES : PLATES_LESS;

	return (
		<ImageBackground source={{ uri: image?.asset?.url }} style={styles.card} borderRadius={14} blurRadius={17}>
			<View style={styles.overlay}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<ImageBackground borderRadius={14} source={{ uri: image?.asset?.url }} style={styles.portrait}>
						<SVGIcon name={title} ele={elements} width={WindowWidth / 10} height={WindowHeight} />
					</ImageBackground>
					<View style={styles.data}>
						<Text style={styles.dataTitle}>{title}</Text>
						<View style={styles.dataDetails}>
							<Text style={[styles.dataDetailsItem, { marginRight: 12 }]}>{PLATES_VALIDATION ?? 0} - License Plates</Text>
							<Text style={styles.dataDetailsItem}>{countries?.length ?? 0} Countries</Text>
						</View>
					</View>
				</View>
				<View style={styles.arrowAccess}>
					<ArrowChvronRight width={ARROW_WIDTH_SIZE} height={ARROW_HEIGHT_SIZE} />
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	card: {
		marginBottom: 15,
	},
	overlay: {
		borderRadius: 14,
		backgroundColor: 'rgba(70,63,65,0.35)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
	},
	portrait: {
		width: WindowWidth / 5,
		height: WindowHeight / 11,
		maxHeight: WindowHeight / 11,
		alignItems: 'center',
		justifyContent: 'center',
	},
	data: {
		alignSelf: 'flex-end',
		marginLeft: 20,
		width: WindowWidth / 2,
	},
	dataTitle: {
		color: Color.white,
		fontSize: WindowWidth / 21,
		fontWeight: '800',
	},
	dataDetails: {
		width: WindowWidth / 2,
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderTopColor: 'rgba(255,255,255,.10)',
		marginTop: 10,
		paddingTop: 10,
		borderStyle: 'solid',
		borderTopWidth: 1,
		flexWrap: 'wrap',
	},
	dataDetailsItem: {
		color: 'white',
		fontWeight: '300',
		fontSize: WindowWidth / 33,
		marginBottom: 5,
	},
	arrowAccess: {
		marginLeft: 20,
		marginRight: 5,
		marginBottom: 5,
		alignSelf: 'flex-end',
	},
});

export default Card;
