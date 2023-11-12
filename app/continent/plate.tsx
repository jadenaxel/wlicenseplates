import type { FC } from "react";
import type { EdgeInsets } from "react-native-safe-area-context";

import { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Color, WindowWidth } from "../../config";
import { Icons } from "../../components";
import { ICountries, IPlates } from "../../types";
import { Context } from "../../Wrapper";

type TPlates = IPlates | any;
type ParseCountry = ICountries[] | null;

const Plate: FC = (): JSX.Element => {
	const [heart, setHeart] = useState<boolean>(false);
	const safeAreaInsets: EdgeInsets = useSafeAreaInsets();
	const { state }: any = useContext(Context);
	const { bg, year, image, description, eligibility, plateType, note, title }: TPlates = state.PlatesData;

	const containerStyle: any = {
		flex: 1,
		backgroundColor: Color.black,
		paddingTop: safeAreaInsets.top,
		paddingBottom: safeAreaInsets.bottom,
		paddingLeft: safeAreaInsets.left,
		paddingRight: safeAreaInsets.right,
	};

	const SaveCountry = async () => {
		try {
			const data: any = await AsyncStorage.getItem("country");
			const parsing: ParseCountry = JSON.parse(data);
			if (parsing === null) await AsyncStorage.setItem("country", JSON.stringify([state.PlatesData]));
			else await AsyncStorage.setItem("country", JSON.stringify([...parsing, state.PlatesData]));
		} catch (e: any) {
			console.log(e.message);
		}
	};

	const GetCountry = async () => {
		try {
			const data: any = await AsyncStorage.getItem("country");
			const parsing: ParseCountry = JSON.parse(data);
			if (parsing === null) return;
			const getTitle: ICountries[] = parsing.filter((item: ICountries) => item.title === title);
			setHeart(getTitle.length > 0 ? true : false);
		} catch (e: any) {
			console.log(e.message);
		}
	};

	const RemoveHeart = async (): Promise<void> => {
		try {
			const data: any = await AsyncStorage.getItem("country");
			const parsing: ParseCountry = JSON.parse(data);
			if (parsing === null) return;
			const deleteItem: ICountries[] = parsing.filter((item: ICountries) => item.title !== title);
			await AsyncStorage.setItem("country", JSON.stringify(deleteItem));
		} catch (e: any) {
			console.log(e.message);
		}
	};

	const handleHeart = (): void => {
		if (heart === true) RemoveHeart();
		if (heart === false) SaveCountry();
		setHeart((prev: boolean): boolean => !prev);
	};

	useEffect((): void => {
		GetCountry();
	}, []);

	return (
		<ScrollView style={containerStyle}>
			<ImageBackground source={{ uri: bg }} style={styles.header} resizeMode="cover">
				<Pressable style={styles.close} onPress={() => router.back()}>
					<Icons.X size={24} />
				</Pressable>
				<View style={styles.continent}>
					<View>
						<Text style={styles.continentTextYear}>{year}</Text>
						<Text style={styles.continentTextTitle}>Year</Text>
					</View>
					<Pressable style={styles.subheaderIcon} onPress={handleHeart}>
						<Icons.Favorite size={20} color={heart ? Color.red : "transparent"} stroke={heart ? Color.red : "white"} />
					</Pressable>
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
	continent: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	continentTextYear: { color: Color.white, fontSize: 24 },
	continentTextTitle: {
		color: Color.white,
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
	subheaderIcon: {
		alignSelf: "flex-end",
		marginBottom: 16,
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
		marginBottom: 10,
	},
	detailEText: {
		color: Color.white,
		fontSize: 14,
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
		marginBottom: 10,
	},
	detailTText: {
		color: Color.white,
		fontSize: 14,
	},
	noteTitle: {
		color: Color.white,
		fontSize: 16,
		marginBottom: 10,
	},
	noteText: {
		color: Color.white,
		fontSize: 14,
	},
});

export default Plate;
