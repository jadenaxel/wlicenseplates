import type { FC } from "react";

import { useState, useContext, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text, Pressable, TextInput, ActivityIndicator } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { Color, WindowHeight, WindowWidth } from "@/config";
import { Actions, Context } from "@/Wrapper";
import { FavoriteCard, Filter } from "@/components";
import Query from "@/query";

import X from "@/assets/images/icons/cross.svg";
import SearchIcon from "@/assets/images/icons/search";

const country: any = [];
const ALL: string = "All";

const controller: AbortController = new AbortController();

const Search: FC = (): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<any>([]);
	const [search, setSearch] = useState<string>("");
	const [countryState, setCountryState] = useState<any>([]);
	const [platesState, setPlatesState] = useState<any>([]);

	const [filterSelected, setFilterSelected] = useState<string>("All");
	const { state, dispatch }: any = useContext(Context);
	const StateData: any = state.Data;

	const handleSearch = (text: string): void => {
		if (text.length === 0) onCancel();

		setSearch(text);
		setPlatesState([]);
		setCountryState([]);

		StateData.map((stateItem: any) => {
			const result = stateItem?.countries?.filter((country: any) => {
				return country.title.toLowerCase().includes(text.toLowerCase());
			});
			result !== undefined && setCountryState((prev: any) => [...prev, ...result]);
		});

		StateData.map((stateItem: any) => {
			stateItem?.countries?.map((country: any) => {
				const result = country.plates.filter((plat: any) => plat.title.toLowerCase().includes(text.toLowerCase()));
				result !== undefined && setPlatesState((prev: any) => [...prev, ...result]);
			});
		});

		StateData.map((stateItem: any) => {
			stateItem.countries !== null && country.push(...stateItem.countries);
		});
	};

	const onCancel = (): void => {
		setSearch("");
		setCountryState([]);
		setPlatesState([]);
	};

	const getCategories = async (): Promise<void> => {
		try {
			const response: Response = await fetch(Query.query.Category.query, { signal: controller.signal });
			if (!response.ok) throw new Error();
			const json: any = await response.json();
			setData([{ title: ALL }, ...json.result]);
			setLoading(false);
		} catch (e: any) {
			console.log(`We've got a problem. Error message: ${e.message}`);
		}
	};

	useEffect(() => {
		getCategories();
	}, []);

	const filterPlates = (plates: any, filter: any): any => {
		if (filter === ALL) return plates;

		return plates.filter((plate: any) => {
			return plate.categories.some((cat: any) => cat.title === filter);
		});
	};

	const newItem: any = filterPlates(platesState, filterSelected);

	if (loading)
		return (
			<View style={{ flex: 1, backgroundColor: Color.black, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator color={Color.red} size={30} />
			</View>
		);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.bar}>
					<View style={[styles.searchBar, search.length > 0 ? { width: WindowWidth - 100 } : { width: "100%" }]}>
						<SearchIcon color={"white"} />
						<TextInput
							style={[styles.searchInput, search.length > 0 ? { width: WindowWidth - 190 } : { width: "78%" }]}
							autoFocus
							autoCorrect
							onChangeText={handleSearch}
							defaultValue={search}
						/>
						<Pressable onPress={onCancel}>
							<X />
						</Pressable>
					</View>
					{search.length > 0 && (
						<Pressable onPress={onCancel}>
							<Text style={styles.cancelButton}>Cancel</Text>
						</Pressable>
					)}
				</View>
				{search.length <= 0 && (
					<View style={styles.nocontent}>
						<Text style={styles.nocontentText}>¡Search somthing!</Text>
					</View>
				)}
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{search.length > 0 &&
						data !== undefined &&
						data.map((item: any, i: number) => {
							return (
								<Pressable key={i} onPress={() => setFilterSelected(item.title)}>
									<Filter title={item.title} isSelected={filterSelected} />
								</Pressable>
							);
						})}
				</ScrollView>
				{newItem.length > 0 &&
					newItem.map((item: any, i: number) => {
						const countryTitle: any = country.filter((items: any) => items._id === item.country._ref)[0];
						return (
							<Link key={i} href={{ pathname: "/continent/plate" }} asChild>
								<Pressable onPress={() => dispatch({ type: Actions.Plates, payload: { item, country: countryTitle.title ?? "" } })}>
									<FavoriteCard image={item.image} country={countryTitle.title ?? ""} title={item.title} key={i} />
								</Pressable>
							</Link>
						);
					})}
				{countryState.length > 0 &&
					filterSelected === ALL &&
					countryState.map((item: any, i: number) => {
						return (
							<Link key={i} href={{ pathname: "/continent/countries" }} asChild>
								<Pressable onPress={() => dispatch({ type: Actions.Country, payload: { item } })}>
									<FavoriteCard image={item.flag} country={item.title} />
								</Pressable>
							</Link>
						);
					})}

				{search.length > 0 && countryState.length <= 0 && platesState.length <= 0 && (
					<View style={styles.nocontent}>
						<Text style={styles.nocontentText}>No results</Text>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
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
	},
	bar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 15,
	},
	searchBar: {
		height: 36,
		borderRadius: 12,
		backgroundColor: "#292929",
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 12,
	},
	searchInput: {
		marginLeft: 12,
		marginRight: 12,
		color: "white",
	},
	cancelButton: {
		color: "white",
		fontSize: 17,
		fontWeight: "400",
	},
	nocontent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: WindowHeight / 1.2,
	},
	nocontentText: {
		color: Color.white,
		fontWeight: "bold",
		fontSize: WindowWidth / 20,
	},
});

export default Search;
