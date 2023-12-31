import type { FC } from "react";

import { Text, StyleSheet } from "react-native";

import { Color, WindowWidth } from "../config";

const Title: FC<any> = (props: any): JSX.Element => {
	const { text }: { text: string } = props;

	return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
	text: {
		color: Color.white,
		fontSize: WindowWidth / 12,
		marginVertical: 7,
		fontWeight: "700",
	},
});

export default Title;
