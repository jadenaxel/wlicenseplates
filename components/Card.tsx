import type { FC } from 'react';
import type { ICard, SVGProps } from '../config/Types';

import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import { ArrowChvronRight } from '@/assets/images/icons';
import { Sizes, Constants, Colors } from '@/config';

export const SVGIcon = ({ name, ele, width, height }: SVGProps): JSX.Element | null => {
	const Component: any = ele[name];
	return Component ? <Component width={width} height={height} /> : null;
};

const Card: FC<ICard> = ({ title, image, countries }: ICard): JSX.Element => {
	const TOTAL_PLATES: number = countries?.reduce((acc: any, country: any) => {
		const VALUE = country.plates?.length ?? 0;
		return acc + VALUE;
	}, 0);

	return (
		<ImageBackground source={{ uri: image?.asset?.url }} borderRadius={14} blurRadius={17}>
			<View style={styles.overlay}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<ImageBackground borderRadius={14} source={{ uri: image?.asset?.url }} style={styles.portrait}>
						<SVGIcon name={title} ele={Constants.elements} width={Sizes.windowWidth / 10} height={Sizes.windowHeight} />
					</ImageBackground>
					<View style={styles.data}>
						<Text style={styles.dataTitle}>{title}</Text>
						<View style={styles.dataDetails}>
							<Text style={[styles.dataDetailsItem, { marginRight: 12 }]}>{TOTAL_PLATES ?? 0} - License Plates</Text>
							<Text style={styles.dataDetailsItem}>{countries?.length ?? 0} Countries</Text>
						</View>
					</View>
				</View>
				<View style={styles.arrowAccess}>
					<ArrowChvronRight width={10} height={10} />
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	overlay: {
		borderRadius: 14,
		backgroundColor: 'rgba(70,63,65,0.35)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
	},
	portrait: {
		width: Sizes.windowWidth / 5,
		height: Sizes.windowHeight / 11,
		maxHeight: Sizes.windowHeight / 11,
		alignItems: 'center',
		justifyContent: 'center',
	},
	data: {
		alignSelf: 'flex-end',
		marginLeft: 20,
		width: Sizes.windowWidth / 2,
	},
	dataTitle: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(20),
		fontWeight: '800',
	},
	dataDetails: {
		width: Sizes.windowWidth / 2,
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
		fontSize: Sizes.ajustFontSize(),
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
