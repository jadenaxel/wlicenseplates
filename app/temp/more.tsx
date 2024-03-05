import type { FC } from "react";

import { View, StyleSheet, ScrollView, Text, Pressable } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Color, WindowWidth, paddingHorizontal } from "@/config";
import { Title } from "@/components";

import Coffee from "@/assets/images/icons/coffee.svg";

const More: FC = (): JSX.Element => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Title text="More" />
				<View style={styles.buyacoffee}>
					<View style={styles.coffee}>
						<Coffee />
						<Text style={styles.coffeeText}>Buy us a coffee</Text>
					</View>
					<Pressable style={styles.goButton}>
						<Text style={styles.goButtonText}>Go now</Text>
					</Pressable>
				</View>
				<View style={styles.appC}>
					{new Array(0).fill(2).map((item: number, i: number) => {
						return (
							<View style={styles.app} key={i}>
								<View style={styles.appView}></View>
								<Text style={styles.appName}>App Name</Text>
							</View>
						);
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal,
		backgroundColor: Color.black,
	},
	buyacoffee: {
		backgroundColor: "#FFFF64",
		borderRadius: 14,
		paddingHorizontal: 14,
		paddingVertical: 28,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 15,
	},
	coffee: {
		flexDirection: "row",
		alignItems: "center",
	},
	coffeeText: {
		fontSize: WindowWidth / 20,
		fontWeight: "bold",
		width: WindowWidth / 3,
		marginLeft: 13,
	},
	goButton: {
		paddingHorizontal: 35,
		paddingVertical: 11,
		borderRadius: 14,
		borderColor: "#000",
		borderWidth: 2,
	},
	goButtonText: {
		fontSize: 15,
		fontWeight: "700",
	},
	appC: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 10,
		justifyContent: "space-between",
	},
	app: {
		flexDirection: "column",
		alignItems: "center",
	},
	appView: {
		width: 80.696,
		height: 80.696,
		borderRadius: 15,
		backgroundColor: "#D9D9D9",
		marginBottom: 10,
	},
	appName: {
		fontSize: 12,
		color: "#FFF",
	},
});

export default More;
