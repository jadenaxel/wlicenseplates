import type { FC } from "react";

import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Color } from "../../config";
import { FavoriteCard } from "../../components";
import { ICountries } from "../../types";

const Favorite: FC = (): JSX.Element => {
	const [data, setData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const GetCountry = async () => {
		try {
			const data: any = await AsyncStorage.getItem("country");
			const parsing = JSON.parse(data);

			if (parsing === null) return;
			setData(parsing);
		} catch (e: any) {
			console.log(e.message);
		}
	};

	const RemoveHeart = async (item: ICountries) => {
		try {
			setLoading(true);
			const data: any = await AsyncStorage.getItem("country");
			const parsing = JSON.parse(data);
			if (parsing === null) return;
			const deleteItem = parsing.filter((items: any) => items.title !== item.title);
			await AsyncStorage.setItem("country", JSON.stringify(deleteItem));
			setLoading(false);
		} catch (e: any) {
			console.log(e.message);
		}
	};

	useEffect(() => {
		GetCountry();
	}, [loading]);

    console.log("as")

	useEffect(() => {
		if (data.length > 0) setLoading(false);
	}, [data]);

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Favorite</Text>
				{!loading &&
					data.map((item: ICountries, i: number) => {
						return <FavoriteCard key={i} {...item} RemoveHeart={RemoveHeart} item={item} />;
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
		fontFamily: "SF_PRO_BOLD",
	},
});

export default Favorite;
