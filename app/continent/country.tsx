import type { FC } from "react";
import type { EdgeInsets } from "react-native-safe-area-context";

import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Image } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, router, useLocalSearchParams } from "expo-router";

import { Color, WindowWidth } from "../../config";
import { Filter, Icons, Plates } from "../../components";
import { ICountries, IPlates } from "../../types";

type LocalParams = string | any;

const filters: string[] = ["All", "Private/Passenger", "United Nations", "Media", "Notes"];

const Country: FC = (): JSX.Element => {
	const [filterSelected, setFilterSelected] = useState<string>("All");

	const { data }: LocalParams = useLocalSearchParams();
	const safeAreaInsets: EdgeInsets = useSafeAreaInsets();
	const newData: ICountries = JSON.parse(data);
	const { description, flag, image, platesNumber, title, plates }: ICountries = newData;

	const containerStyle: any = {
		flex: 1,
		backgroundColor: Color.black,
		paddingTop: safeAreaInsets.top,
		paddingBottom: safeAreaInsets.bottom,
		paddingLeft: safeAreaInsets.left,
		paddingRight: safeAreaInsets.right,
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={containerStyle}>
			<ImageBackground source={{ uri: image }} style={styles.header} resizeMode="cover">
				<Pressable onPress={(): void => router.back()}>
					<Icons.ArrowLongLeft size={24} color={Color.white} />
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
				{filters &&
					filters.map((item: string, i: number) => {
						return (
							<Pressable key={i} onPress={() => setFilterSelected(item)}>
								<Filter title={item} isSelected={filterSelected} />
							</Pressable>
						);
					})}
			</ScrollView>
			<View style={styles.plates}>
				{plates &&
					plates.map((item: IPlates, i: number) => {
						return (
							<Link
								key={i}
								href={{ pathname: "/continent/plate", params: { data: JSON.stringify(item), country: JSON.stringify(title) } }}
								asChild
							>
								<Pressable>
									<Plates {...item} />
								</Pressable>
							</Link>
						);
					})}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	header: {
		height: 217,
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
