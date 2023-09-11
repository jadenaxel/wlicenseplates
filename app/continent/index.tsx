import type { FC } from "react";

import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from "react-native";

import { useGlobalSearchParams } from "expo-router";

import { ICard } from "../../types";

const Continent: FC = (props: any) => {
	const { data }: any = useGlobalSearchParams();
	const { title, countries, description, plates, icons, image }: ICard = JSON.parse(data);

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground source={{ uri: image }} style={styles.header} resizeMode="cover">
					<View>
						<Text>Holas</Text>
					</View>
				</ImageBackground>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		height: 300,
		width: "100%",
	},
});

export default Continent;
