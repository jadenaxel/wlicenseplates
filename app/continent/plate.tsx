import type { FC } from "react";

import { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Image } from "react-native";

import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Color, WindowWidth, paddingHorizontal } from "../../config";
import { ICountries, IPlates } from "../../types";
import { Context } from "../../Wrapper";

import Cross from "@/assets/images/icons/cross.svg";
import Heart from "@/assets/images/icons/heart";

type TPlates = IPlates | any;
type ParseCountry = ICountries[] | null;

const Plate: FC = (): JSX.Element => {
	const [heart, setHeart] = useState<boolean>(false);
	const { state }: any = useContext(Context);

	const { bg, year, image, description, eligibility, plateType, note, title }: TPlates = state.PlatesData;

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
		<ScrollView style={styles.main}>
			<ImageBackground source={{ uri: bg }} style={styles.header} resizeMode="cover">
				<View style={styles.action_button}>
					<Pressable onPress={handleHeart}>
						<Heart color={heart ? "red" : "white"} fill={heart ? "red" : "none"} />
					</Pressable>
					<Pressable onPress={() => router.back()}>
						<Cross />
					</Pressable>
				</View>
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
				{note ? (
					<View style={{ padding: 10 }}>
						<Text style={styles.noteTitle}>Note:</Text>
						<Text style={styles.noteText}>{note}</Text>
					</View>
				) : null}
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Color.black,
	},
	header: {
		height: 317,
		width: WindowWidth,
		paddingHorizontal,
		paddingTop: 25,
		paddingBottom: 16,
		justifyContent: "space-between",
		marginBottom: 16,
	},
	action_button: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		alignSelf: "flex-end",
		marginTop: 30,
	},
	content: { paddingHorizontal },
	continentTextYear: {
		color: Color.white,
		fontSize: 24,
		fontWeight: "bold",
	},
	continentTextTitle: {
		color: Color.white,
		fontSize: 18,
		textTransform: "uppercase",
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
		fontSize: 16,
	},
	detail: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		marginBottom: 15,
	},
	detailE: {
		backgroundColor: "#171717",
		borderRadius: 14,
		paddingVertical: 12,
		paddingLeft: 12,
		paddingRight: 16,
		width: WindowWidth / 2.2,
	},
	detailETitle: {
		color: Color.white,
		fontSize: 16,
		marginBottom: 10,
		fontWeight: "bold",
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
		width: WindowWidth / 2.2,
	},
	detailTTitle: {
		color: Color.white,
		fontSize: 16,
		marginBottom: 10,
		fontWeight: "bold",
	},
	detailTText: {
		color: Color.white,
		fontSize: 14,
	},
	noteTitle: {
		color: Color.white,
		fontSize: 16,
		marginBottom: 10,
		fontWeight: "bold",
	},
	noteText: {
		color: Color.white,
		fontSize: 14,
	},
});

export default Plate;
