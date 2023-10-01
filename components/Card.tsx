import type { FC } from "react";
import type { ICard } from "../types";

import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";

import Icons from "./Icons";
import { Color } from "../config";

const Card: FC<ICard> = ({ title, image, platesNumber, countriesQuantity }: ICard): JSX.Element => {
	return (
		<ImageBackground source={{ uri: image }} style={styles.card} blurRadius={17}>
			<View style={styles.overlay}>
				<View style={{ flexDirection: "row" }}>
					<ImageBackground borderRadius={14} source={{ uri: image }} style={styles.portrait}>
						<Icons.AfricaIcon type={title} />
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
					<Icons.ArrowRight size={13.08} />
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	card: {
		overflow: "hidden",
		borderRadius: 14,
		marginBottom: 15,
	},
	overlay: {
		backgroundColor: "rgba(70,63,65,0.35)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 10,
	},
	portrait: {
		width: 80,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
	},
	data: {
		alignSelf: "flex-end",
		marginLeft: 10,
	},
	dataTitle: {
		color: Color.white,
		fontSize: 21,
		fontWeight: "800",
	},
	dataDetails: {
		borderTopColor: "rgba(255,255,255,.10)",
		marginTop: 10,
		paddingTop: 10,
		borderStyle: "solid",
		borderTopWidth: 1,
		flexDirection: "row",
	},
	dataDetailsItem: {
		color: "white",
		fontWeight: "300",
		fontSize: 12,
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
