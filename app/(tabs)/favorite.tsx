import type { FC } from "react";

import { View, StyleSheet, ScrollView, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";

import { Color } from "../../config";
import { FavoriteCard } from "../../components";
import { ICountries } from "../../types";

type ParseCountry = ICountries[] | null;

const Favorite: FC = (): JSX.Element => {
	const [data, setData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);

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
	}, [loading]);

	useEffect((): void => {
		if (data.length > 0) setLoading(false);
	}, [data]);

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Favorite</Text>
				{!loading &&
					data.map((item: ICountries, i: number) => {
						return (
							<Link key={i} href={{ pathname: "/continent/plate", params: { data: JSON.stringify(item) } }} asChild>
								<Pressable>
									<FavoriteCard {...item} RemoveHeart={RemoveHeart} item={item} />
								</Pressable>
							</Link>
						);
					})}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: Color.black,
	},
	title: {
		color: Color.white,
		fontSize: 28,
		marginTop: 70,
		marginBottom: 29,
	},
});

export default Favorite;
