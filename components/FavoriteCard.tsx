import type { FC } from "react";

import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import { ICountries } from "../types";
import Icons from "./Icons";
import { Color } from "../config";

type TProps = ICountries | any;

const FavoriteCard: FC<ICountries | any> = (props: ICountries | any): JSX.Element => {
	const { image, title, countryP, RemoveHeart }: TProps = props;

	return (
		<View style={styles.container}>
			<View style={styles.detial}>
				<Image source={{ uri: image[0] }} style={styles.image} />
				<View style={styles.detialText}>
					<Text style={styles.detialTextTitle}>{title}</Text>
					<View style={styles.detialTextCountry}>
						<Icons.Circle size={12} />
						<Text style={styles.detialTextCountryText}>Country</Text>
						<Text style={styles.detialTextCountryTextTwo}>{countryP}</Text>
					</View>
				</View>
			</View>
			<Pressable onPress={(): any => RemoveHeart(props.item)}>
				<Icons.X size={24} />
			</Pressable>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 14,
		backgroundColor: "#171717",
		marginBottom: 15,
		paddingHorizontal: 16,
		paddingVertical: 12,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	detial: {
		alignItems: "center",
		flexDirection: "row",
	},
	detialText: {},
	image: {
		width: 70.006,
		height: 40.775,
		borderRadius: 4,
		marginRight: 16,
	},
	detialTextTitle: {
		fontSize: 19,
		color: Color.white,
		marginBottom: 4,
	},
	detialTextCountry: {
		flexDirection: "row",
		alignItems: "center",
	},
	detialTextCountryText: {
		color: "#FF1464",
		marginRight: 4,
	},
	detialTextCountryTextTwo: {
		color: "white",
	},
});

export default FavoriteCard;
