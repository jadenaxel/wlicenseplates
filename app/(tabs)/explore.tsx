// Imports for react types
import type { FC } from "react";

// Imports for Expo and Reac Native libraries
import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import { Link } from "expo-router";

// Others imports
import { Color } from "../../config";
import { Card, Loading } from "../../components";
import { ICard } from "../../types";
import Query from "../../query";

const Home: FC = (): JSX.Element => {
	const [data, setData] = useState<ICard | any>();

	const getData = async (): Promise<void> => {
		const response: Response = await fetch(Query.query.Continent.query);
		const json: any = await response.json();
		setData(json.result);
	};

	useEffect(() => {
		getData();
	}, []);

	if (data === undefined) return <Loading />;

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Explore</Text>
				{data.map((item: ICard | any, i: number) => {
					return (
						<Link key={i} href={{ pathname: "/continent", params: { data: JSON.stringify(item) } }} asChild>
							<Pressable>
								<Card {...item} />
							</Pressable>
						</Link>
					);
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
		fontFamily: "SF_PRO_BOLD",
	},
});

export default Home;
