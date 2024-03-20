import type { FC } from 'react';

import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { ICountries } from '@/types';

import { Color, WindowHeight, WindowWidth, SCREEN_SIZE_COMPARATION } from '@/config';

import { Cross as X, Dot } from '@/assets/images/icons';

type TProps = ICountries | any;

const IMAGE_SCREEN_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 6 : WindowWidth / 4;

const DOT_SCREEN_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 40 : 12;

const DETAIL_COUNTRY_LABEL: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 40 : 12;

const DETAIL_TITLE: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 35 : 12;

const CROSS_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 30 : 16;

const FavoriteCard: FC<ICountries | any> = (props: ICountries | any): JSX.Element => {
	const { image, title, country, RemoveHeart }: TProps = props;

	const imageType: any = image.hasOwnProperty('asset') ? image.asset?.url : image[0]?.asset?.url;

	return (
		<View style={styles.container}>
			<View style={styles.detail}>
				<Image source={{ uri: imageType }} style={styles.image} />
				<View>
					{!image.hasOwnProperty('asset') ? <Text style={styles.detailTextTitle}>{title}</Text> : null}
					<View style={styles.detailTextCountry}>
						<Dot height={DOT_SCREEN_SIZE} width={DOT_SCREEN_SIZE} />
						<Text style={styles.detailTextCountryText}>Country</Text>
						<Text style={styles.detailTextCountryTextTwo}>{country}</Text>
					</View>
				</View>
			</View>
			{RemoveHeart ? (
				<Pressable onPress={(): any => RemoveHeart(props.item)}>
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
		marginVertical: 10,
		paddingHorizontal: 16,
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
		height: WindowHeight / 15,
		borderRadius: 4,
		marginRight: 16,
	},
	detailTextTitle: {
		fontSize: DETAIL_TITLE,
		color: Color.white,
		marginBottom: 4,
	},
	detailTextCountry: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	detailTextCountryText: {
		color: '#FF1464',
		marginHorizontal: 4,
		fontSize: DETAIL_COUNTRY_LABEL,
	},
	detailTextCountryTextTwo: {
		color: 'white',
		fontSize: DETAIL_COUNTRY_LABEL,
	},
});

export default FavoriteCard;
