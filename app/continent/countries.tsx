import type { FC } from "react";

import { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Image, ActivityIndicator } from "react-native";

import { Link, router } from "expo-router";

import { Color, WindowWidth, paddingHorizontal } from "@/config";
import { Filter, Plates } from "@/components";
import { ICountries, IPlates } from "@/types";
import { Actions, Context } from "@/Wrapper";
import Query from "@/query";

import ArrowLeft from "@/assets/images/icons/arrow-left.svg";

const controller: AbortController = new AbortController();

const ALL: string = "All";

const Country: FC = (): JSX.Element => {
	const [filterSelected, setFilterSelected] = useState<string>(ALL);
	const [data, setData] = useState<any>([]);
	const { state, dispatch }: any = useContext(Context);
	const [loading, setLoading] = useState<boolean>(true);
	const { description, flag, image, platesNumber, title, plates }: ICountries = state.CountryData.item;

	const getCategories = async (): Promise<void> => {
		try {
			const response: Response = await fetch(Query.query.Category.query, { signal: controller.signal });
			if (!response.ok) throw new Error();
			const json: any = await response.json();
			setData([{ title: ALL }, ...json.result]);
			setLoading(false);
		} catch (e: any) {
			console.log(`We've got a problem. Error message: ${e.message}`);
		}
	};

	useEffect(() => {
		getCategories();
	}, []);

	const filterPlates = (plates: any, filter: any) => {
		if (filter === ALL) return plates;

		return plates.filter((plate: any) => {
			return plate.categories.some((cat: any) => cat.title === filter);
		});
	};

	const newItem: any = filterPlates(plates, filterSelected);

	if (loading)
		return (
			<View style={{ flex: 1, backgroundColor: Color.black, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator color={Color.red} size={30} />
			</View>
		);

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
			<ImageBackground source={{ uri: image }} style={styles.header} resizeMode="cover">
				<Pressable onPress={(): void => router.back()} style={styles.back}>
					<ArrowLeft />
				</Pressable>
				<View style={styles.continent}>
					<Image style={styles.contientIcon} source={{ uri: flag }} />
					<Text style={styles.continentText}>{title}</Text>
				</View>
			</ImageBackground>
			<View style={styles.subheader}>
				<View style={styles.subheaderSideOne}>
					<Text style={[styles.subheaderInfoText, styles.subheaderInfoPlates]}>{platesNumber} - License Plates</Text>
					<Text style={styles.subheaderInfoDescription}>{description}</Text>
				</View>
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filter}>
				{data.length > 0 &&
					data.map((item: any, i: number) => {
						return (
							<Pressable key={i} onPress={() => setFilterSelected(item.title)}>
								<Filter title={item.title} isSelected={filterSelected} />
							</Pressable>
						);
					})}
			</ScrollView>

			<View style={styles.plates}>
				{newItem ? (
					newItem.map((item: IPlates, i: number) => {
						return (
							<Link key={i} href={{ pathname: "/continent/plate" }} asChild>
								<Pressable onPress={() => dispatch({ type: Actions.Plates, payload: { item, country: title } })}>
									<Plates {...item} />
								</Pressable>
							</Link>
						);
					})
				) : (
					<View style={styles.nocontent}>
						<Text style={styles.nocontentText}>There's no content</Text>
					</View>
				)}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Color.black,
	},
	back: {
		marginTop: 30,
	},
	header: {
		height: 317,
		width: WindowWidth,
		paddingHorizontal: 17,
		paddingTop: 25,
		paddingBottom: 16,
		justifyContent: "space-between",
	},
	continent: {
		flexDirection: "row",
		alignItems: "center",
	},
	contientIcon: {
		width: 57,
		height: 57,
		marginRight: 17,
	},
	continentText: {
		fontSize: WindowWidth / 15,
		fontWeight: "bold",
		color: Color.white,
	},
	subheader: {
		backgroundColor: "#463F41",
		paddingHorizontal: 16,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 15,
	},
	subheaderSideOne: {
		flexDirection: "column",
		justifyContent: "space-between",
		width: 290,
	},
	subheaderInfoDescription: {
		color: Color.white,
		fontSize: 15,
	},
	subheaderInfoPlates: {
		marginRight: 22,
		marginBottom: 20,
	},
	subheaderInfoText: {
		color: Color.white,
		fontSize: 15,
	},
	filter: {
		paddingHorizontal,
	},
	plates: {
		paddingHorizontal,
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 15,
	},
	nocontent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	nocontentText: {
		color: Color.white,
		fontWeight: "bold",
		fontSize: WindowWidth / 20,
	},
});

export default Country;
