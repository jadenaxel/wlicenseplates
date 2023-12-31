import type { FC } from "react";

import { useState } from "react";
import { View, StyleSheet, ScrollView, Text, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { Color, WindowWidth } from "../../config";
import { Icons } from "../../components";

const Search: FC = (): JSX.Element => {
	const [search, setSearch] = useState<string>("");

	const handleSearch = (text: string): void => {
		setSearch(text);
	};

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Search</Text>
				<View style={styles.bar}>
					<View style={styles.searchBar}>
						<Icons.SearchIcon size={20} color={"white"} />
						<TextInput style={styles.searchInput} autoFocus autoCorrect onChangeText={handleSearch} defaultValue={search} />
						<Pressable onPress={(): void => setSearch("")}>
							<Icons.X size={20} />
						</Pressable>
					</View>
					<Pressable onPress={(): void => setSearch("")}>
						<Text style={styles.cancelButton}>Cancel</Text>
					</Pressable>
				</View>
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
	},
	bar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	searchBar: {
		width: WindowWidth - 100,
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
		width: WindowWidth - 180,
	},
	cancelButton: {
		color: "white",
		fontSize: 17,
		fontWeight: "400",
	},
});

export default Search;
