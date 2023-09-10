// Imports for react types
import type { FC } from "react";

// Imports for Expo and Reac Native libraries
import { StyleSheet, View, ScrollView, Text } from "react-native";

// Others imports
import { Color } from "../config";

const Home: FC = (): JSX.Element => {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Explore</Text>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: Color.black,
	},
	title: {
		color: Color.white,
		fontSize: 28,
	},
});

export default Home;
