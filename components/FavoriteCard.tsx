import type { FC } from 'react';
import type { ICountries } from '@/config/Types';

import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { Cross as X, Dot } from '@/assets/images/icons';

import { Sizes, Colors } from '@/config';

type TProps = ICountries | any;

const IMAGE_SCREEN_SIZE: number = Sizes.windowWidth / 4;
const DOT_SCREEN_SIZE: number = 12;
const CROSS_SIZE: number = 16;

const FavoriteCard: FC<ICountries | any> = (props: ICountries | any): JSX.Element => {
	const { image, year, country, RemoveHeartPlates }: TProps = props;

	const imageType: any = image.hasOwnProperty('asset') ? image.asset?.url : image[0]?.asset?.url;

	return (
		<View style={styles.container}>
			<View style={styles.detail}>
				<Image source={{ uri: imageType }} style={styles.image} />
				<View>
					{!image.hasOwnProperty('asset') ? <Text style={styles.detailTextTitle}>{year}</Text> : null}
					<View style={styles.detailTextCountry}>
						<Dot height={DOT_SCREEN_SIZE} width={DOT_SCREEN_SIZE} />
						<Text style={styles.detailTextCountryText}>Country</Text>
						<Text style={styles.detailTextCountryTextTwo}>{country}</Text>
					</View>
				</View>
			</View>
			{RemoveHeartPlates ? (
				<Pressable onPress={(): any => RemoveHeartPlates(props.item)}>
					<X width={CROSS_SIZE} height={CROSS_SIZE} />
				</Pressable>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 14,
		backgroundColor: '#171717',
		paddingHorizontal: Sizes.paddingHorizontal,
		paddingVertical: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	detail: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	image: {
		width: IMAGE_SCREEN_SIZE,
		height: Sizes.windowHeight / 15,
		borderRadius: 4,
		marginRight: 16,
	},
	detailTextTitle: {
		fontSize: Sizes.ajustFontSize(15),
		color: Colors.text,
		marginBottom: 4,
	},
	detailTextCountry: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	detailTextCountryText: {
		color: '#FF1464',
		marginHorizontal: 4,
		fontSize: Sizes.ajustFontSize(),
	},
	detailTextCountryTextTwo: {
		color: 'white',
		fontSize: Sizes.ajustFontSize(),
        width: "60%"
	},
});

export default FavoriteCard;
