import type { FC } from "react";

import { useState, useContext } from "react";
import { View, StyleSheet, ScrollView, Text, Pressable, TextInput } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Color, WindowWidth, filters } from "@/config";
import { Context } from "@/Wrapper";
import { FavoriteCard, Filter } from "@/components";

import X from "@/assets/images/icons/cross.svg";
import SearchIcon from "@/assets/images/icons/search";

const Search: FC = (): JSX.Element => {
	const [search, setSearch] = useState<string>("");
	const [country, setCountry] = useState([]);
	const [plate, setPlate] = useState([]);
	const [plates, setPlates] = useState([]);
	const [filterSelected, setFilterSelected] = useState<string>("All");
	const { state }: any = useContext(Context);

	const handleSearch = (text: string): void => {
		setSearch(text);
		const data: any = [];

		const CountryData = state.Data.filter((item: any, i: number) => {
			return item.countries?.filter((items: any) => {
				return items.title.toLowerCase().includes(text.toLowerCase());
			});
		});

		const PlatesData = state.Data.filter((item: any) => {
			return item.countries?.filter((item: any) => {
				return item?.plates?.filter((item: any) => {
					return item.title.toLowerCase().includes(text.toLowerCase());
				});
			});
		});

		PlatesData[0].countries.map((item: any) => {
			data.push(item.plates);
		});

		if (text.length === 0) {
			onCancel();
			return;
		}

		setPlates(data.flat());
		setPlate(PlatesData[0].countries);
		setCountry(CountryData[0].countries);
	};

	const onCancel = () => {
		setSearch("");
		setCountry([]);
		setPlate([]);
		setPlates([]);
	};

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
					<View>
						<Text style={{ color: "white" }}>There's no search</Text>
					</View>
				)}
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{plates.length > 0 || (country.length > 0 && filters)
						? filters.map((item: string, i: number) => {
								return (
									<Pressable key={i} onPress={() => setFilterSelected(item)}>
										<Filter title={item} isSelected={filterSelected} />
									</Pressable>
								);
						  })
						: null}
				</ScrollView>
				{plates.length > 0 &&
					plates.map((item: any, i: number) => {
						const countryTitle: any = plate.filter((items: any) => items._id === item.country._ref)[0];
						return <FavoriteCard image={item.image} country={countryTitle.title} title={item.title} key={i} />;
					})}
				{country.length > 0 &&
					country.map((item: any, i: number) => {
						return <FavoriteCard image={item.flag} country={item.title} key={i} />;
					})}
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
});

export default Search;
