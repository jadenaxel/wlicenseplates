import type { FC } from "react";

import { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, Pressable } from "react-native";

import { router, Link } from "expo-router";

import { ICard, ICountries } from "../../types";
import { Color, WindowWidth, paddingHorizontal } from "../../config";
import { Icons, ContinentList } from "../../components";
import { Actions, Context } from "../../Wrapper";

type LocalParams = string | any;

const Continent: FC = () => {
	const { state, dispatch }: any = useContext(Context);
	const { title, description, countriesQuantity, countries, image, platesNumber }: ICard = state.ContinentData;
	const continentTitle = state?.ContinentData?.countries[0]?.continent?.title;

	return (
		<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.main}>
			<ImageBackground source={{ uri: image }} style={styles.header} resizeMode="cover">
				<Pressable onPress={(): void => router.back()} style={styles.back}>
					<Icons.ArrowLongLeft size={24} color={Color.white} />
				</Pressable>
				<View style={styles.continent}>
					{/* <Image style={styles.contientIcon} source={{ uri: icons }} /> */}
					<Icons.AfricaIcon type={continentTitle} />
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
							<Pressable onPress={() => dispatch({ type: Actions.Country, payload: item })}>
								<ContinentList {...item} />
							</Pressable>
						</Link>
					);
				})}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Color.black,
	},
	header: {
		height: 317,
		paddingHorizontal,
		paddingTop: 25,
		paddingBottom: 16,
		justifyContent: "space-between",
	},
	back: {
		marginTop: 30,
	},
	subheader: {
		backgroundColor: "#463F41",
		padding: paddingHorizontal,
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
		fontSize: WindowWidth / 25,
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
		fontSize: WindowWidth / 10,
		fontWeight: "bold",
		color: Color.white,
	},
	subheaderIcon: {
		alignSelf: "flex-end",
		marginBottom: 16,
	},
});

export default Continent;
