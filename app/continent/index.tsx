import type { FC } from "react";

import { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";

import { router, Link } from "expo-router";

import { ICard } from "@/types";
import { Color, WindowWidth, paddingHorizontal, elements, WindowHeight } from "@/config";
import { ContinentList, POPUP } from "@/components";
import { Actions, Context } from "@/Wrapper";

import { SVGIcon } from "@/components/Card";

import BackArrow from "@/assets/images/icons/arrow-left.svg";

const Continent: FC = (): JSX.Element => {
	const [isFilter, setIsFilter] = useState<string>("Random");
	const { state, dispatch }: any = useContext(Context);
	const { title, description, countries, image }: ICard = state.ContinentData;

	const sortType = (a: any, b: any) => {
		if (isFilter === "Random") return Math.random() - 0.5;
		else return a.title.localeCompare(b.title);
	};

	return (
		<View style={styles.main}>
			<ImageBackground source={{ uri: image }} style={styles.header} resizeMode="cover">
				<Pressable onPress={(): void => router.back()} style={styles.back}>
					<BackArrow />
				</Pressable>
				<View style={styles.continent}>
					<SVGIcon name={title} ele={elements} width={WindowWidth / 10} height={WindowHeight / 2.4} />
					<Text style={styles.continentText}>{title}</Text>
				</View>
			</ImageBackground>
			<View style={styles.subheader}>
				<View style={styles.subheaderSideOne}>
					<View style={styles.subheaderInfo}>
						<Text style={[styles.subheaderInfoText, styles.subheaderInfoPlates]}>{countries?.plates?.length ?? 0} - License Plates</Text>
						<Text style={styles.subheaderInfoText}>{countries?.length ?? 0} Countries</Text>
					</View>
					<Text style={styles.subheaderInfoDescription}>{description}</Text>
				</View>
				{WindowWidth < 450 ? <POPUP setIsFilter={setIsFilter} /> : null}
			</View>
			{countries ? (
				countries.sort(sortType).map((item: any, i: number) => {
					return (
						<Link key={i} href={{ pathname: "/continent/countries" }} asChild>
							<Pressable onPress={() => dispatch({ type: Actions.Country, payload: { item } })}>
								<ContinentList {...item} />
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
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Color.black,
	},
	header: {
		height: WindowHeight / 2.9,
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
		width: WindowWidth / 1.2,
	},
	subheaderInfo: {
		flexDirection: "row",
		marginBottom: 20,
	},
	subheaderInfoDescription: {
		color: Color.white,
		fontSize: WindowWidth / 25,
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
	continentText: {
		fontSize: WindowWidth / 11,
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
