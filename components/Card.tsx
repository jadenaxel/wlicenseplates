import type { FC } from "react";
import type { ICard } from "../types";

import { View, Text, ImageBackground, StyleSheet } from "react-native";

import { Color, WindowHeight, WindowWidth, elements } from "../config";

import Arrow from "@/assets/images/icons/arrow.svg";

const SVGIcon = ({ name, ele }: { name: string; ele: any }): JSX.Element | null => {
	const Component: any = ele[name];
	return Component ? <Component /> : null;
};

const Card: FC<ICard> = ({ title, image, platesNumber, countriesQuantity }: ICard): JSX.Element => {
	return (
		<ImageBackground source={{ uri: image }} style={styles.card} borderRadius={14} blurRadius={17}>
			<View style={styles.overlay}>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<ImageBackground borderRadius={14} source={{ uri: image }} style={styles.portrait}>
						<SVGIcon name={title} ele={elements} />
					</ImageBackground>
					<View style={styles.data}>
						<Text style={styles.dataTitle}>{title}</Text>
						<View style={styles.dataDetails}>
							<Text style={[styles.dataDetailsItem, { marginRight: 12 }]}>{platesNumber} - License Plates</Text>
							<Text style={styles.dataDetailsItem}>{countriesQuantity} Countries</Text>
						</View>
					</View>
				</View>
				<View style={styles.arrowAccess}>
					<Arrow />
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	card: {
		marginBottom: 15,
	},
	overlay: {
		borderRadius: 14,
		backgroundColor: "rgba(70,63,65,0.35)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 10,
	},
	portrait: {
		width: WindowWidth / 5,
		height: WindowHeight / 10,
		alignItems: "center",
		justifyContent: "center",
	},
	data: {
		alignSelf: "flex-end",
		marginLeft: 10,
		width: WindowWidth / 2,
	},
	dataTitle: {
		color: Color.white,
		fontSize: WindowWidth / 21,
		fontWeight: "800",
	},
	dataDetails: {
		width: WindowWidth / 2,
		justifyContent: "space-between",
		flexDirection: "row",
		borderTopColor: "rgba(255,255,255,.10)",
		marginTop: 10,
		paddingTop: 10,
		borderStyle: "solid",
		borderTopWidth: 1,
		flexWrap: "wrap",
	},
	dataDetailsItem: {
		color: "white",
		fontWeight: "300",
		fontSize: WindowWidth / 33,
		marginBottom: 5,
	},
	arrowAccess: {
		marginLeft: 20,
		marginRight: 5,
		marginBottom: 5,
		alignSelf: "flex-end",
	},
});

export default Card;
