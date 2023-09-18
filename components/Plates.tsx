import type { FC } from "react";

import { View, StyleSheet, Image, Text } from "react-native";

import { IPlates } from "../types";
import { Color, WindowWidth } from "../config";

const Plates: FC<IPlates> = (props: IPlates): JSX.Element => {
	const { image, title } = props;

	return (
		<View>
			<Image source={{ uri: image[0] }} style={styles.plateImage} />
			<Text style={styles.plateText}>{title}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	plateImage: {
		width: WindowWidth / 3.3,
		height: 61.009,
		resizeMode: "cover",
		borderRadius: 4,
		marginBottom: 11,
	},
	plateText: {
		color: Color.white,
		width: WindowWidth / 3.3,
		textAlign: "center",
	},
});

export default Plates;
