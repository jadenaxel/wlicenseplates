import type { FC } from "react";
import type { EdgeInsets } from "react-native-safe-area-context";

import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";

import { Color, WindowWidth } from "../../config";
import { Icons } from "../../components";
import { IPlates } from "../../types";

const Plate: FC = (): JSX.Element => {
	const { data }: any = useLocalSearchParams();
	const safeAreaInsets: EdgeInsets = useSafeAreaInsets();
	const newData: IPlates = JSON.parse(data);
	const { bg, year, image, description, eligibility, plateType, note } = newData;

	const containerStyle: any = {
		flex: 1,
		backgroundColor: Color.black,
		paddingTop: safeAreaInsets.top,
		paddingBottom: safeAreaInsets.bottom,
		paddingLeft: safeAreaInsets.left,
		paddingRight: safeAreaInsets.right,
	};

	return (
		<ScrollView style={containerStyle}>
			<ImageBackground source={{ uri: bg }} style={styles.header} resizeMode="cover">
				<Pressable style={styles.close} onPress={() => router.back()}>
					<Icons.X size={24} />
				</Pressable>
				<View>
					<Text style={styles.continentTextYear}>{year}</Text>
					<Text style={styles.continentTextTitle}>Year</Text>
				</View>
			</ImageBackground>
			<View style={styles.content}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{image.map((item: string, i: number) => {
						return (
							<View style={styles.platesContainer} key={i}>
								<Image source={{ uri: item }} style={styles.platesImages} />
							</View>
						);
					})}
				</ScrollView>
				<View style={styles.description}>
					<Text style={styles.descriptionText}>{description}</Text>
				</View>
				<View style={styles.detail}>
					<View style={styles.detailE}>
						<Text style={styles.detailETitle}>Eligibility</Text>
						<Text style={styles.detailEText}>{eligibility}</Text>
					</View>
					<View style={styles.detailT}>
						<Text style={styles.detailTTitle}>Plate Type</Text>
						<Text style={styles.detailTText}>{plateType}</Text>
					</View>
				</View>
				{note && (
					<View>
						<Text style={styles.noteTitle}>Note:</Text>
						<Text style={styles.noteText}>{note}</Text>
					</View>
				)}
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	header: {
		height: 217,
		width: WindowWidth,
		paddingHorizontal: 17,
		paddingTop: 25,
		paddingBottom: 16,
		justifyContent: "space-between",
		marginBottom: 16,
	},
	close: {
		alignItems: "flex-end",
	},
	content: {
		paddingHorizontal: 16,
	},
	continentTextYear: { color: Color.white, fontFamily: "SF_PRO_MEDIUM", fontSize: 24 },
	continentTextTitle: {
		color: Color.white,
		fontFamily: "SF_PRO_REGULAR",
		fontSize: 18,
	},
	contientIcon: {
		width: 57,
		height: 57,
		marginRight: 17,
	},
	continentText: {
		fontSize: 41,
		fontWeight: "bold",
		color: Color.white,
	},
	platesContainer: {
		borderRadius: 4,
		backgroundColor: Color.white,
		paddingHorizontal: 8.37,
		paddingVertical: 5.14,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
		marginBottom: 16,
	},
	platesImages: {
		width: 75,
		height: 50,
		resizeMode: "contain",
	},
	description: {
		marginVertical: 15,
		backgroundColor: "#171717",
		borderRadius: 14,
		paddingHorizontal: 11.07,
		paddingVertical: 23.06,
	},
	descriptionText: {
		color: Color.white,
		lineHeight: 20,
		fontFamily: "SF_PRO_REGULAR",
		fontSize: 16,
	},
	detail: {
		flexDirection: "row",
		gap: 10,
		width: WindowWidth / 2.1,
		marginBottom: 15,
	},
	detailE: {
		backgroundColor: "#171717",
		borderRadius: 14,
		paddingVertical: 12,
		paddingLeft: 12,
		paddingRight: 16,
	},
	detailETitle: {
		color: Color.white,
		fontSize: 16,
		fontFamily: "SF_PRO_BOLD",
		marginBottom: 10,
	},
	detailEText: {
		color: Color.white,
		fontSize: 14,
		fontFamily: "SF_PRO_REGULAR",
	},
	detailT: {
		backgroundColor: "#171717",
		borderRadius: 14,
		paddingVertical: 12,
		paddingLeft: 12,
		paddingRight: 16,
	},
	detailTTitle: {
		color: Color.white,
		fontSize: 16,
		fontFamily: "SF_PRO_BOLD",
		marginBottom: 10,
	},
	detailTText: {
		color: Color.white,
		fontSize: 14,
		fontFamily: "SF_PRO_REGULAR",
	},
	noteTitle: {
		color: Color.white,
		fontSize: 16,
		fontFamily: "SF_PRO_BOLD",
		marginBottom: 10,
	},
	noteText: {
		color: Color.white,
		fontFamily: "SF_PRO_REGULAR",
		fontSize: 14,
	},
});

export default Plate;
