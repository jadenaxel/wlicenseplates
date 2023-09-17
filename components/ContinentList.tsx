import type { FC } from "react";

import { View, Text, Image, StyleSheet } from "react-native";

import { ICountries } from "../types";
import { Color } from "../config";

const ContinentList: FC<ICountries> = (props: ICountries): JSX.Element => {
	const { image, platesNumber, title }: ICountries = props;

	return (
		<View>
			<View style={styles.container}>
				<View style={styles.flagsContinaer}>
					<Image style={styles.flagsContinaerImage} source={{ uri: image }} />
					<Text style={styles.flagsContinaerText}>{title}</Text>
				</View>
				<Text style={styles.platesNumber}>{platesNumber}</Text>
			</View>
			<View style={styles.line} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 15,
	},
	flagsContinaer: {
		flexDirection: "row",
		alignItems: "center",
	},
	flagsContinaerImage: {
		width: 44,
		height: 25,
		marginRight: 8.47,
		borderRadius: 4,
	},
	flagsContinaerText: {
		color: Color.white,
		fontSize: 14,
		fontFamily: "SF_PRO_REGULAR",
	},
	platesNumber: {
		fontFamily: "SF_PRO_REGULAR",
		fontSize: 14,
		color: Color.white,
	},
	line: {
		backgroundColor: Color.white,
		height: 1,
		opacity: 0.15,
		marginHorizontal: 16,
	},
});

export default ContinentList;
