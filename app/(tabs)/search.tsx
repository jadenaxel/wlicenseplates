import type { FC } from 'react';

import { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable, TextInput } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { Color, WindowHeight, WindowWidth } from '@/config';
import { Actions, Context } from '@/Wrapper';
import { FavoriteCard, Filter, LoadingActivity, useFecth } from '@/components';
import Query from '@/query';

import { ISearch, Cross as X } from '@/assets/images/icons';

const country: any = [];
const ALL: string = 'All';

const Search: FC = (): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const [countryState, setCountryState] = useState<any>([]);
	const [platesState, setPlatesState] = useState<any>([]);

	const [filterSelected, setFilterSelected] = useState<string>('All');
	const { state, dispatch }: any = useContext(Context);
	const StateData: any = state.Data;

	const { data, isLoading } = useFecth({ uri: Query.query.Category.query, type: 'search' });

	const handleSearch = (text: string): void => {
		if (text.length === 0) {
			onCancel();
			return;
		}

		setSearch(text);
		setPlatesState([]);
		setCountryState([]);

		StateData.forEach((stateItem: any) => {
			stateItem.countries !== null && country.push(...stateItem.countries);

			const countryResults = stateItem?.countries?.filter((country: any) => country.title.toLowerCase().includes(text.toLowerCase()));
			if (countryResults) setCountryState((prev: any) => [...prev, ...countryResults]);

			stateItem?.countries?.forEach((country: any) => {
				const plateResults = country?.plates?.filter((plate: any) => plate.title.toLowerCase().includes(text.toLowerCase()));
				if (plateResults) setPlatesState((prev: any) => [...prev, ...plateResults]);
			});
		});
	};

	const onCancel = (): void => {
		setSearch('');
		setCountryState([]);
		setPlatesState([]);
	};

	const filterPlates = (plates: any, filter: any): any => {
		if (filter === ALL) return plates;

		return plates.filter((plate: any) => {
			return plate.categories.some((cat: any) => cat.title === filter);
		});
	};

	const newItem: any = filterPlates(platesState, filterSelected);

	if (isLoading) return <LoadingActivity />;

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.bar}>
					<View style={[styles.searchBar, search.length > 0 ? { width: WindowWidth - 100 } : { width: '100%' }]}>
						<ISearch color={'white'} width={22} height={22} />
						<TextInput
							style={[styles.searchInput, search.length > 0 ? { width: WindowWidth - 190 } : { width: '100%' }]}
							autoFocus
							autoCorrect
							onChangeText={handleSearch}
							defaultValue={search}
						/>
						<Pressable onPress={onCancel}>
							<X width={22} height={22} />
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
						<Text style={styles.nocontentText}>¡Search something!</Text>
					</View>
				)}
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{search.length > 0 &&
						data.length > 0 &&
						countryState.length === 0 &&
						platesState.length > 0 &&
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
							<Link key={i} href={{ pathname: '/continent/plate' }} asChild>
								<Pressable onPress={() => dispatch({ type: Actions.Plates, payload: { item, country: countryTitle.title ?? '' } })}>
									<FavoriteCard image={item.image} country={countryTitle.title ?? ''} title={item.title} key={i} />
								</Pressable>
							</Link>
						);
					})}
				{countryState.length > 0 &&
					filterSelected === ALL &&
					countryState.map((item: any, i: number) => {
						return (
							<Link key={i} href={{ pathname: '/continent/countries' }} asChild>
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
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 15,
	},
	searchBar: {
		height: 36,
		borderRadius: 12,
		backgroundColor: '#292929',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 12,
	},
	searchInput: {
		marginLeft: 12,
		marginRight: 12,
		color: 'white',
	},
	cancelButton: {
		color: 'white',
		fontSize: 17,
		fontWeight: '400',
	},
	nocontent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: WindowHeight / 1.2,
	},
	nocontentText: {
		color: Color.white,
		fontWeight: 'bold',
		fontSize: WindowWidth / 20,
	},
});

export default Search;
