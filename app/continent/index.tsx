import type { FC } from "react";

import { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable, FlatList } from "react-native";

import { router, Link } from "expo-router";

import { ICard } from "../../types";
import { Color, WindowWidth, paddingHorizontal, elements } from "../../config";
import { ContinentList } from "../../components";
import { Actions, Context } from "../../Wrapper";

import { SVGIcon } from "@/components/Card";

import BackArrow from "@/assets/images/icons/arrow-left.svg";
// import Filter from "@/assets/images/icons/filter.svg";

const Continent: FC = (): JSX.Element => {
	const { state, dispatch }: any = useContext(Context);
	const { title, description, countriesQuantity, countries, platesNumber, image }: ICard = state.ContinentData;

	return (
		<View style={styles.main}>
			<ImageBackground source={{ uri: image }} style={styles.header} resizeMode="cover">
				<Pressable onPress={(): void => router.back()} style={styles.back}>
					<BackArrow />
				</Pressable>
				<View style={styles.continent}>
					<SVGIcon name={title} ele={elements} />
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

				{/* <Pressable style={styles.subheaderIcon}>
					<Filter />
				</Pressable> */}

			</View>
			{countries ? (
				<FlatList
					data={countries}
					renderItem={(item: any) => (
						<Link href={{ pathname: "/continent/countries" }} asChild>
							<Pressable onPress={() => dispatch({ type: Actions.Country, payload: item })}>
								<ContinentList {...item} />
							</Pressable>
						</Link>
					)}
					keyExtractor={(item: any) => item._id}
				/>
			) : (
				<View style={styles.nocontent}>
					<Text style={styles.nocontentText}>There's no content</Text>
				</View>
			)}
		</View>
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
		marginLeft: 17,
	},
	subheaderIcon: {
		alignSelf: "flex-end",
		marginBottom: 16,
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

export default Continent;
