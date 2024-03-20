import type { FC } from 'react';
import type { IPlates } from '@/types';

import { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Image } from 'react-native';

import { router } from 'expo-router';

import { Color, SCREEN_SIZE_COMPARATION, WindowHeight, WindowWidth, paddingHorizontal, GetCountry, RemoveHeart, SaveCountry } from '@/config';
import { Context } from '@/Wrapper';

import { Cross, Heart } from '@/assets/images/icons';

type TPlates = IPlates | any;

const X_ICON_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 20 : 22;
const HEART_ICON_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 24 : 22;

const Plate: FC = (): JSX.Element => {
	const [heart, setHeart] = useState<boolean>(false);
	const { state }: any = useContext(Context);

	const { bg, year, image, description, eligibility, plateType, note, title }: TPlates = state.PlatesData;

	const LocalStorage = async (): Promise<any> => {
		const getTitle: any = await GetCountry(title);
		setHeart(getTitle?.length > 0 ? true : false);
	};

	const handleHeart = (): void => {
		if (heart === true) RemoveHeart(state.PlatesData);
		if (heart === false) SaveCountry(state.PlatesData);
		setHeart((prev: boolean): boolean => !prev);
	};

	useEffect((): void => {
		LocalStorage();
	}, []);

	return (
		<ScrollView style={styles.main}>
			<ImageBackground source={{ uri: bg?.asset?.url }} style={styles.header} resizeMode='cover' blurRadius={3}>
				<View style={styles.action_button}>
					<Pressable onPress={handleHeart}>
						<Heart width={HEART_ICON_SIZE} height={HEART_ICON_SIZE} color={heart ? 'red' : 'white'} fill={heart ? 'red' : 'none'} />
					</Pressable>
					<Pressable onPress={() => router.back()}>
						<Cross width={X_ICON_SIZE} height={X_ICON_SIZE} />
					</Pressable>
				</View>
				<View>
					<Text style={styles.continentTextYear}>{year}</Text>
					<Text style={styles.continentTextTitle}>Year</Text>
				</View>
			</ImageBackground>
			<View style={styles.content}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{image.map((item: any, i: number) => {
						return (
							<View style={styles.platesContainer} key={i}>
								<Image source={{ uri: item?.asset?.url }} style={styles.platesImages} />
							</View>
						);
					})}
				</ScrollView>
				{description ? (
					<View style={styles.description}>
						<Text style={styles.descriptionText}>{description}</Text>
					</View>
				) : null}
				<View style={styles.detail}>
					{eligibility ? (
						<View style={styles.detailE}>
							<Text style={styles.detailETitle}>Eligibility</Text>
							<Text style={styles.detailEText}>{eligibility}</Text>
						</View>
					) : null}
					{plateType ? (
						<View style={styles.detailE}>
							<Text style={styles.detailTTitle}>Plate Type</Text>
							<Text style={styles.detailTText}>{plateType}</Text>
						</View>
					) : null}
				</View>
				{note ? (
					<View style={{ padding: 10 }}>
						<Text style={styles.noteTitle}>Note:</Text>
						<Text style={styles.noteText}>{note}</Text>
					</View>
				) : null}
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Color.black,
	},
	header: {
		height: WindowHeight / 2.9,
		width: WindowWidth,
		paddingHorizontal,
		paddingTop: 25,
		paddingBottom: 16,
		justifyContent: 'space-between',
		marginBottom: 16,
	},
	action_button: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		alignSelf: 'flex-end',
		marginTop: 30,
	},
	content: { paddingHorizontal },
	continentTextYear: {
		color: Color.white,
		fontSize: WindowWidth / 25,
		fontWeight: 'bold',
	},
	continentTextTitle: {
		color: Color.white,
		fontSize: WindowWidth / 20,
		textTransform: 'uppercase',
	},
	platesContainer: {
		borderRadius: 4,
		backgroundColor: Color.white,
		paddingHorizontal: 8.37,
		paddingVertical: 5.14,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
		marginBottom: 16,
	},
	platesImages: {
		width: WindowWidth / 4,
		height: WindowHeight / 15,
		resizeMode: 'contain',
	},
	description: {
		marginVertical: 15,
		backgroundColor: '#171717',
		borderRadius: 14,
		paddingHorizontal: 11.07,
		paddingVertical: 23.06,
	},
	descriptionText: {
		color: Color.white,
		fontSize: WindowWidth / 25,
	},
	detail: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	detailE: {
		backgroundColor: '#171717',
		borderRadius: 14,
		paddingVertical: 12,
		paddingLeft: 12,
		paddingRight: 16,
		width: WindowWidth / 2.2,
		minHeight: WindowHeight / 6,
		height: '100%',
	},
	detailETitle: {
		color: Color.white,
		fontSize: WindowWidth / 25,
		marginBottom: 10,
		fontWeight: 'bold',
	},
	detailEText: {
		color: Color.white,
		fontSize: WindowWidth / 25,
	},
	detailTTitle: {
		color: Color.white,
		fontSize: WindowWidth / 25,
		marginBottom: 10,
		fontWeight: 'bold',
	},
	detailTText: {
		color: Color.white,
		fontSize: WindowWidth / 27,
	},
	noteTitle: {
		color: Color.white,
		fontSize: WindowWidth / 25,
		marginBottom: 10,
		fontWeight: 'bold',
	},
	noteText: {
		color: Color.white,
		fontSize: WindowWidth / 25,
	},
});

export default Plate;
