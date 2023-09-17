import type { FC } from "react";
import type { ICard } from "../types";

import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

import Icons from "./Icons";
import { WindowWidth } from "../config";

const Card: FC<ICard> = ({ title, image, icons, platesNumber, countriesQuantity }: ICard): JSX.Element => {
	return (
		<View style={styles.card}>
			<ImageBackground source={{ uri: image }} style={styles.image}>
				<BlurView intensity={70} tint="dark" style={styles.blur}>
					<View style={styles.portraitView}>
						<ImageBackground borderRadius={14} source={{ uri: image }} style={styles.portrait}>
							<Image style={styles.icons} source={{ uri: icons }} />
						</ImageBackground>
					</View>
					<View style={styles.data}>
						<Text style={styles.dataTitle}>{title}</Text>
						<View style={styles.dataLine} />
						<View style={styles.dataDetails}>
							<Text style={[styles.dataDetailsItem, { marginRight: 12 }]}>{platesNumber} - License Plates</Text>
							<Text style={styles.dataDetailsItem}>{countriesQuantity} Countries</Text>
						</View>
					</View>
					<View style={styles.arrowAccess}>
						<Icons.ArrowRight size={13.08} />
					</View>
				</BlurView>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		overflow: "hidden",
		borderRadius: 14,
		marginBottom: 14.1,
	},
	image: {
		height: 100,
	},
	blur: {
		height: 100,
		display: "flex",
		flexDirection: "row",
	},
	portraitView: {
		paddingVertical: 9.73,
		paddingLeft: 9.73,
		marginRight: 10,
	},
	portrait: {
		width: 80.54,
		height: 80.54,
		alignItems: "center",
		justifyContent: "center",
	},
	icons: {
		width: 38.11,
		height: 41.87,
	},
	data: {
		flexDirection: "column",
		alignSelf: "flex-end",
	},
	dataTitle: {
		color: "white",
		fontSize: 21,
		fontFamily: "SF_PRO_BOLD",
		marginBottom: 8,
	},
	dataLine: {
		height: 1,
		backgroundColor: "white",
		opacity: 0.1,
		width: 190.84,
		marginBottom: 8,
	},
	dataDetails: {
		flexDirection: "row",
		marginBottom: 13,
	},
	dataDetailsItem: {
		color: "white",
		fontSize: 12,
		fontFamily: "SF_PRO_REGULAR",
		fontWeight: "300",
	},
	arrowAccess: {
		alignSelf: "flex-end",
		justifyContent: "flex-end",
		marginBottom: 13,
		marginLeft: WindowWidth - 350,
	},
});

export default Card;
