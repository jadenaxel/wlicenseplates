import type { FC } from "react";

import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Image } from "react-native";
import { useContext, useState } from "react";

import { Link, router } from "expo-router";

import { Color, WindowWidth, filters } from "@/config";
import { Filter, Plates } from "@/components";
import { ICountries, IPlates } from "@/types";
import { Actions, Context } from "@/Wrapper";

import ArrowLeft from "@/assets/images/icons/arrow-left.svg";

const Country: FC = (): JSX.Element => {
	const [filterSelected, setFilterSelected] = useState<string>("All");
	const { state, dispatch }: any = useContext(Context);
	const { description, flag, image, platesNumber, title, plates }: ICountries = state.CountryData.item;

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
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{filters
					? filters.map((item: string, i: number) => {
							return (
								<Pressable key={i} onPress={() => setFilterSelected(item)}>
									<Filter title={item} isSelected={filterSelected} />
								</Pressable>
							);
					  })
					: null}
			</ScrollView>

			<View style={styles.plates}>
				{plates ? (
					plates.map((item: IPlates, i: number) => {
						return (
							<Link key={i} href={{ pathname: "/continent/plate" }} asChild>
								<Pressable onPress={() => dispatch({ type: Actions.Plates, payload: { item, country: title } })}>
									<Plates {...item} />
								</Pressable>
							</Link>
						);
					})
				) : (
					<View>
						<Text style={{ color: "white" }}>There's no plate</Text>
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
		fontSize: 41,
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
	plates: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 15,
	},
});

export default Country;
