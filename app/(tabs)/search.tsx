import type { FC } from 'react';

import { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable, TextInput } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { Actions, Context } from '@/Wrapper';
import { FavoriteCard, Filter, LoadingActivity, useFecth, AdBanner } from '@/components';
import Query from '@/config/Query';
import { ISearch } from '@/assets/images/icons';
import { Sizes, Constants, Colors, Ads } from '@/config';

const country: any = [];

const Search: FC = (): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const [countryState, setCountryState] = useState<any>([]);
	const [platesState, setPlatesState] = useState<any>([]);
	const [filterSelected, setFilterSelected] = useState<string>(Constants.ALL);

	const { data, isLoading } = useFecth({ uri: Query.Category.Query, type: 'search' });

	const { state, dispatch }: any = useContext(Context);
	const StateData: any = state.Data;

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
				const plateResults = country?.plates?.filter((plate: any) => plate.year.toLowerCase().includes(text.toLowerCase()));
				if (plateResults) setPlatesState((prev: any) => [...prev, ...plateResults]);
			});
		});
	};

	const onCancel = (): void => {
		setSearch('');
		setCountryState([]);
		setPlatesState([]);
	};

	const newItem: any = Constants.filterPlates(platesState ?? [], filterSelected, Constants.ALL);
	const FilterData: any = Constants.DataFilterSorted(data, Constants.ALL);

	const SEARCH_BAR_SIZE_VIEW: any = search.length > 0 ? { width: Sizes.windowWidth - 100 } : { width: '100%' };
	const TEXT_INPUT_SIZE_ELE: any = search.length > 0 ? { width: Sizes.windowWidth - 200 } : { width: '100%' };

	const FILTER_RENDER_CONDITION: boolean = search.length > 0 && data.length > 0 && countryState.length === 0 && platesState.length > 0;
	const COUNTRY_RENDER_CONDITION: boolean = countryState.length > 0 && filterSelected === Constants.ALL;

	if (isLoading) return <LoadingActivity />;

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.bar}>
					<View style={[styles.searchBar, SEARCH_BAR_SIZE_VIEW]}>
						<ISearch color={'white'} width={22} height={22} />
						<TextInput style={[styles.searchInput, TEXT_INPUT_SIZE_ELE]} autoFocus autoCorrect onChangeText={handleSearch} defaultValue={search} />
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
				<Filter data={FilterData} setFilterSelected={setFilterSelected} filterSelected={filterSelected} condiction={FILTER_RENDER_CONDITION} />
				<View style={{ gap: 15 }}>
					{newItem.length > 0 &&
						newItem.map((item: any, i: number) => {
							const countryTitle: any = country.filter((items: any) => items._id === item.country._ref)[0];
							return (
								<Link key={i} href={{ pathname: '/continent/plate' }} asChild>
									<Pressable onPress={() => dispatch({ type: Actions.Plates, payload: { item, country: countryTitle.year ?? '' } })}>
										<FavoriteCard image={item.image} country={countryTitle?.title ?? ''} year={item.year} key={i} />
									</Pressable>
								</Link>
							);
						})}
				</View>
				<View style={{ gap: 15 }}>
					{COUNTRY_RENDER_CONDITION &&
						countryState.map((item: any, i: number) => {
							return (
								<Link key={i} href={{ pathname: '/continent/countries' }} asChild>
									<Pressable onPress={() => dispatch({ type: Actions.Country, payload: { item } })}>
										<FavoriteCard image={item.flag} country={item.title} />
									</Pressable>
								</Link>
							);
						})}
				</View>

				{search.length > 0 && countryState.length === 0 && newItem.length === 0 && (
					<View style={styles.nocontent}>
						<Text style={styles.nocontentText}>No results</Text>
					</View>
				)}
			</ScrollView>
			<AdBanner ID={Ads.SEARCH_SECTION_BANNER_V1} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: Sizes.paddingHorizontal,
		backgroundColor: Colors.background,
		paddingBottom: 70,
	},
	bar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 15,
	},
	searchBar: {
		height: 40,
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
		fontSize: 15,
	},
	cancelButton: {
		color: 'white',
		fontSize: Sizes.ajustFontSize(15),
		fontWeight: '400',
	},
	nocontent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: Sizes.windowHeight / 1.2,
	},
	nocontentText: {
		color: Colors.text,
		fontWeight: 'bold',
		fontSize: Sizes.ajustFontSize(20),
	},
});

export default Search;
