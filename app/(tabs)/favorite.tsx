import type { FC } from 'react';
import type { ICountries } from '@/config/Types';

import { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import {
	Color,
	WindowHeight,
	GetPlates,
	RemoveHeartPlates,
	SCREEN_SIZE_COMPARATION,
	WindowWidth,
	paddingHorizontal,
	FAVORITE_SECTION_BANNER_V1,
} from '@/configs';
import { FavoriteCard, LoadingActivity, Title, AdBanner } from '@/components';
import { Actions, Context } from '@/Wrapper';

import { NoPlate } from '@/assets/images/icons';

const NoPlateSize: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 2 : 212;

const Favorite: FC = (): JSX.Element => {
	const [data, setData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const { dispatch }: any = useContext(Context);

	const RemoveHeartPlatesUpper = async (item: any): Promise<void> => {
		setLoading(true);
		await RemoveHeartPlates(item);
		setData([]);
		await LoadData();
		setLoading(false);
	};

	const LoadData = async (): Promise<void> => {
		setData(await GetPlates());
		setLoading(false);
	};

	useEffect((): void => {
		LoadData();
	}, []);

	if (loading) return <LoadingActivity />;

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Title text='Favorite' />
				{data.length > 0 ? (
					data.map((item: ICountries, i: number) => (
						<Link key={i} href={{ pathname: '/continent/plate' }} asChild>
							<Pressable onPress={() => dispatch({ type: Actions.Plates, payload: { item } })}>
								<FavoriteCard {...item} RemoveHeartPlates={RemoveHeartPlatesUpper} item={item} />
							</Pressable>
						</Link>
					))
				) : (
					<View style={styles.plate}>
						<NoPlate width={NoPlateSize} height={NoPlateSize} />
						<Text style={styles.plateText}>You don’t have a favorite plate yet.</Text>
					</View>
				)}
			</ScrollView>
			<AdBanner ID={FAVORITE_SECTION_BANNER_V1} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal,
		backgroundColor: Color.black,
		paddingBottom: 70,
	},
	plate: {
		alignItems: 'center',
		justifyContent: 'center',
		height: WindowHeight / 1.55,
	},
	plateText: {
		color: Color.white,
		marginTop: 15,
		fontWeight: '500',
		fontSize: WindowWidth / 25,
	},
});

export default Favorite;
