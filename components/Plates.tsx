import type { FC } from "react";

import { View, StyleSheet, Image, Text } from "react-native";

import { IPlates } from "../types";
import { Color, WindowHeight, WindowWidth } from "../config";

const Plates: FC<IPlates> = (props: IPlates): JSX.Element => {
	const { image, title }: IPlates = props;

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
		height: WindowHeight / 10,
		resizeMode: "cover",
		borderRadius: 4,
		marginBottom: 11,
	},
	plateText: {
		color: Color.white,
		width: WindowWidth / 3.3,
		textAlign: "center",
        fontSize: WindowWidth / 25
	},
});

export default Plates;
