// Imports for react types
import type { FC } from "react";

// Imports for Expo and Reac Native libraries
import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Pressable, SafeAreaView } from "react-native";
import { Link } from "expo-router";

// Others imports
import { Color } from "../../config";
import { Card, Title } from "../../components";
import { ICard } from "../../types";
import Query from "../../query";
import { Actions, Context } from "../../Wrapper";

const Home: FC = (): JSX.Element => {
	const [data, setData] = useState<ICard | any>();

	const { dispatch }: any = useContext(Context);

	const getData = async (): Promise<void> => {
		const response: Response = await fetch(Query.query.Home.Continent.query);
		const json: any = await response.json();
		setData(json.result);
		dispatch({ type: Actions.All, payload: json.result });
	};
	useEffect((): void => {
		getData();
	}, []);

	if (data === undefined) return <View />;

	return (
		<SafeAreaView style={styles.body}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<Title text="Explore" />
					<View style={styles.group}>
						{data.map((item: ICard | any, i: number) => {
							return (
								<Link key={i} href={{ pathname: "/continent" }} asChild>
									<Pressable onPress={() => dispatch({ type: Actions.Continent, payload: item })}>
										<Card {...item} />
									</Pressable>
								</Link>
							);
						})}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: Color.black,
	},
	container: {
		paddingHorizontal: 16,
	},
	group: {
		marginVertical: 15,
	},
});

export default Home;
