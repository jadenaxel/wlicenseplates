import type { FC } from "react";

import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import { ICountries } from "../types";

import { Color } from "../config";

import Dot from "@/assets/images/icons/dot.svg";
import X from "@/assets/images/icons/cross.svg";

type TProps = ICountries | any;

const FavoriteCard: FC<ICountries | any> = (props: ICountries | any): JSX.Element => {
	const { image, title, country, RemoveHeart }: TProps = props;

	const imageType = typeof image === "string" ? image : image[0];

	return (
		<View style={styles.container}>
			<View style={styles.detial}>
				<Image source={{ uri: imageType }} style={styles.image} />
				<View>
					{typeof image !== "string" ? <Text style={styles.detialTextTitle}>{title}</Text> : null}
					<View style={styles.detialTextCountry}>
						<Dot />
						<Text style={styles.detialTextCountryText}>Country</Text>
						<Text style={styles.detialTextCountryTextTwo}>{country}</Text>
					</View>
				</View>
			</View>
			{RemoveHeart ? (
				<Pressable onPress={(): any => RemoveHeart(props.item)}>
					<X />
				</Pressable>
			) : null}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 14,
		backgroundColor: "#171717",
		marginVertical: 10,
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
		marginHorizontal: 4,
	},
	detialTextCountryTextTwo: {
		color: "white",
	},
});

export default FavoriteCard;
