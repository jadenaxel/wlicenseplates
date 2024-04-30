import type { FC } from 'react';
import type { ICountries } from '@/config/Types';

import { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { FavoriteCard, LoadingActivity, Title, AdBanner } from '@/components';
import { Actions, Context } from '@/Wrapper';
import { NoPlate } from '@/assets/images/icons';
import { Sizes, Colors, LocalStorage, Ads } from '@/config';

const Favorite: FC = (): JSX.Element => {
	const [data, setData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const { dispatch }: any = useContext(Context);

	const RemoveHeartPlatesUpper = async (item: any): Promise<void> => {
		setLoading(true);
		await LocalStorage.RemoveHeartPlates(item);
		setData([]);
		await LoadData();
	};

	const LoadData = async (): Promise<void> => {
		setData(await LocalStorage.GetPlates());
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
				{data.length > 0 && (
					<View style={{ gap: 15 }}>
						{data.map((item: ICountries, i: number) => (
							<Link key={i} href={{ pathname: '/continent/plate' }} asChild>
								<Pressable onPress={() => dispatch({ type: Actions.Plates, payload: { item } })}>
									<FavoriteCard {...item} RemoveHeartPlates={RemoveHeartPlatesUpper} item={item} />
								</Pressable>
							</Link>
						))}
					</View>
				)}
				{data.length <= 0 && (
					<View style={styles.plate}>
						<NoPlate width={212} height={212} />
						<Text style={styles.plateText}>You don’t have a favorite plate yet.</Text>
					</View>
				)}
			</ScrollView>
			<AdBanner ID={Ads.FAVORITE_SECTION_BANNER_V1} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: Sizes.paddingHorizontal,
		backgroundColor: Colors.background,
		paddingBottom: 70,
	},
	plate: {
		alignItems: 'center',
		justifyContent: 'center',
		height: Sizes.windowHeight / 1.55,
	},
	plateText: {
		color: Colors.text,
		marginTop: 15,
		fontWeight: '500',
		fontSize: Sizes.ajustFontSize(20),
	},
});

export default Favorite;
