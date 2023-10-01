import type { FC } from "react";
import type { EdgeInsets } from "react-native-safe-area-context";

import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { router, useLocalSearchParams, Link } from "expo-router";

import { ICard, ICountries } from "../../types";
import { Color, WindowWidth } from "../../config";
import { Icons, ContinentList } from "../../components";

type LocalParams = string | any;

const Continent: FC = () => {
	const { data }: LocalParams = useLocalSearchParams();
	const safeAreaInsets: EdgeInsets = useSafeAreaInsets();
	const newData: ICard = JSON.parse(data);

	const { title, description, countriesQuantity, countries, image, platesNumber }: ICard = newData;

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
					{/* <Image style={styles.contientIcon} source={{ uri: icons }} /> */}
					<Text style={styles.continentText}>{title}</Text>
				</View>
			</ImageBackground>
			<View style={styles.subheader}>
				<View style={styles.subheaderSideOne}>
					<View style={styles.subheaderInfo}>
						<Text style={[styles.subheaderInfoText, styles.subheaderInfoPlates]}>{platesNumber} - License Plates</Text>
						<Text style={styles.subheaderInfoText}>{countriesQuantity} Countries</Text>
					</View>
					<Text style={styles.subheaderInfoDescription}>{description}</Text>
				</View>
				<View style={styles.subheaderIcon}>
					<Icons.FilterIcon size={16} />
				</View>
			</View>
			{countries &&
				countries.map((item: ICountries, i: number): JSX.Element => {
					return (
						<Link href={{ pathname: "/continent/country", params: { data: JSON.stringify(item) } }} key={i} asChild>
							<Pressable>
								<ContinentList {...item} />
							</Pressable>
						</Link>
					);
				})}
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
	subheader: {
		backgroundColor: "#463F41",
		paddingHorizontal: 16,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 7,
	},
	subheaderSideOne: {
		flexDirection: "column",
		justifyContent: "space-between",
		width: 290,
	},
	subheaderInfo: {
		flexDirection: "row",
		marginBottom: 20,
	},
	subheaderInfoDescription: {
		color: Color.white,
		fontSize: 15,
	},
	subheaderInfoPlates: {
		marginRight: 22,
	},
	subheaderInfoText: {
		color: Color.white,
		fontSize: 15,
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
	subheaderIcon: {
		alignSelf: "flex-end",
		marginBottom: 16,
	},
});

export default Continent;
