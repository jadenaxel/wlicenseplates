// Imports for react types
import type { FC } from "react";

// Imports for Expo and Reac Native libraries
import { StyleSheet, View, ScrollView, Text, StatusBar } from "react-native";

// Others imports
import { Color } from "../config";
import { Card } from "../components";
import data from "../db_temp.json";
import { ICard } from "../types";

const Home: FC = (): JSX.Element => {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={Color.black} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Explore</Text>
				{data.home.continent.map((item: ICard | any, i: number) => {
					return <Card {...item} key={i} />;
				})}
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
		marginTop: 70,
		marginBottom: 29,
		fontFamily: "SF_PRO_REGULAR",
	},
});

export default Home;
