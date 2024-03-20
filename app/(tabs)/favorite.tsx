import type { FC } from 'react';
import type { ICountries } from '@/types';

import { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { Color, WindowHeight, GetCountry, RemoveHeart, SCREEN_SIZE_COMPARATION, WindowWidth } from '@/config';
import { FavoriteCard, LoadingActivity, Title } from '@/components';
import { Actions, Context } from '@/Wrapper';

import { NoPlate } from '@/assets/images/icons';
// import MenuDot from "@/assets/images/icons/menu-dot.svg";

const NoPlateSize: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 2 : 212;

const Favorite: FC = (): JSX.Element => {
	const [data, setData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const { dispatch }: any = useContext(Context);

	const GetCountry = async (): Promise<void> => {
		try {
			const data: any = await AsyncStorage.getItem("country");
			const parsing: ParseCountry = JSON.parse(data);
			if (parsing === null) return;
			setData(parsing);
		} catch (e: any) {
			console.log(e.message);
		}
	};

	const RemoveHeart = async (item: ICountries): Promise<void> => {
		try {
			setLoading(true);
			const data: any = await AsyncStorage.getItem("country");
			const parsing: ParseCountry = JSON.parse(data);
			if (parsing === null) return;
			const deleteItem: ICountries[] = parsing.filter((items: ICountries) => items.title !== item.title);
			await AsyncStorage.setItem("country", JSON.stringify(deleteItem));
			setLoading(false);
		} catch (e: any) {
			console.log(e.message);
		}
	};

	useEffect((): void => {
		GetCountry();
	}, [loading, data]);

	useEffect((): void => {
		if (data.length > 0) setLoading(false);
	}, [data]);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Title text="Favorite" />
				{!loading
					? data.map((item: ICountries, i: number) => (
							<Link key={i} href={{ pathname: "/continent/plate" }} asChild>
								<Pressable onPress={() => dispatch({ type: Actions.Plates, payload: { item } })}>
									<FavoriteCard {...item} RemoveHeart={RemoveHeart} item={item} />
								</Pressable>
							</Link>
					  ))
					: null}
				{data.length === 0 ? (
					<View style={styles.plate}>
						<NoPlate />
						<Text style={styles.plateText}>You don’t have a favorite plate yet.</Text>
					</View>
				) : null}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: Color.black,
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
