import type { FC } from "react";

import { View, Text, StyleSheet } from "react-native";
import { Color, paddingHorizontal } from "../config";

const Filter: FC<any> = (props: any): JSX.Element => {
	const { title, isSelected } = props;

	return (
		<View style={[styles.container, isSelected === title ? { backgroundColor: Color.red } : {}]}>
			<Text style={[isSelected === title ? { color: Color.white } : {}]}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 24,
		paddingVertical: 6,
		paddingHorizontal,
		backgroundColor: "#D6D6D6",
		marginRight: 8,
		marginBottom: 15,
	},
});

export default Filter;
