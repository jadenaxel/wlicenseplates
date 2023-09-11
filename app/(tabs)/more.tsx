import type { FC } from "react";

import { View, StyleSheet } from "react-native";

const More: FC = (): JSX.Element => {
	return <View style={styles.container} />;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
		backgroundColor: "#000",
	},
});

export default More;
