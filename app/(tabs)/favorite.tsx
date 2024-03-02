import type { FC } from "react";

import { useState, useEffect, useContext } from "react";
import { View, StyleSheet, ScrollView, Text, Pressable } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { Color, WindowHeight } from "@/config";
import { FavoriteCard, Title } from "@/components";
import { ICountries } from "@/types";
import { Actions, Context } from "@/Wrapper";

import NoPlate from "@/assets/images/icons/no-plate.svg";
// import MenuDot from "@/assets/images/icons/menu-dot.svg";

type ParseCountry = ICountries[] | null;

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
					? data.map((item: ICountries, i: number) => {
							return (
								<Link key={i} href={{ pathname: "/continent/plate" }} asChild>
									<Pressable onPress={() => dispatch({ type: Actions.Plates, payload: { item } })}>
										<FavoriteCard {...item} RemoveHeart={RemoveHeart} item={item} />
									</Pressable>
								</Link>
							);
					  })
					: null}
				{data.length === 0 ? (
					<View style={styles.plate}>
						<NoPlate />
						<Text style={styles.plateText}>You don’t have a favorite plate yet. </Text>
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
	header: {
		marginTop: 70,
		marginBottom: 29,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		color: Color.white,
		fontSize: 28,
		fontWeight: "bold",
	},
	plate: {
		alignItems: "center",
		justifyContent: "center",
		height: WindowHeight / 1.55,
	},
	plateText: {
		color: Color.white,
		marginTop: 15,
		fontWeight: "500",
	},
});

export default Favorite;
