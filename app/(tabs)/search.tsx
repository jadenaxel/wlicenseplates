import type { FC } from 'react';

import { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable, TextInput } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

import { Color, DataFilterSorted, SCREEN_SIZE_COMPARATION, WindowHeight, WindowWidth, filterPlates, paddingHorizontal } from '@/config';
import { Actions, Context } from '@/Wrapper';
import { FavoriteCard, Filter, LoadingActivity, useFecth, AdBanner } from '@/components';
import Query from '@/query';
import { ISearch } from '@/assets/images/icons';

const country: any = [];
const ALL: string = 'All';

const SEARCH_BAR_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowHeight / 20 : 40;
const SEARCH_ICON_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 20 : 22;
const SEARCH_BAR_TEXT_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 25 : 15;

const SEARCH_AD_UNIT: string = 'ca-app-pub-5125983390574582/1770303045';

const Search: FC = (): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const [countryState, setCountryState] = useState<any>([]);
	const [platesState, setPlatesState] = useState<any>([]);
	const [filterSelected, setFilterSelected] = useState<string>(ALL);

	const { data, isLoading } = useFecth({ uri: Query.query.Category.query, type: 'search' });

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

	const newItem: any = filterPlates(platesState ?? [], filterSelected, ALL);
	const FilterData: any = DataFilterSorted(data, ALL);

	const SEARCH_BAR_SIZE_VIEW: any = search.length > 0 ? { width: SCREEN_SIZE_COMPARATION ? WindowWidth - 130 : WindowWidth - 100 } : { width: '100%' };
	const TEXT_INPUT_SIZE_ELE: any = search.length > 0 ? { width: WindowWidth - 200 } : { width: '100%' };

	const FILTER_RENDER_CONDITION: boolean = search.length > 0 && data.length > 0 && countryState.length === 0 && platesState.length > 0;
	const COUNTRY_RENDER_CONDITION: boolean = countryState.length > 0 && filterSelected === ALL;

	if (isLoading) return <LoadingActivity />;

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.bar}>
					<View style={[styles.searchBar, SEARCH_BAR_SIZE_VIEW]}>
						<ISearch color={'white'} width={SEARCH_ICON_SIZE} height={SEARCH_ICON_SIZE} />
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

				{search.length > 0 && countryState.length === 0 && newItem.length === 0 && (
					<View style={styles.nocontent}>
						<Text style={styles.nocontentText}>No results</Text>
					</View>
				)}
			</ScrollView>
			<AdBanner ID={SEARCH_AD_UNIT} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal,
		backgroundColor: Color.black,
		paddingBottom: 70,
	},
	bar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 15,
	},
	searchBar: {
		height: SEARCH_BAR_SIZE,
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
		fontSize: SEARCH_BAR_TEXT_SIZE,
	},
	cancelButton: {
		color: 'white',
		fontSize: SCREEN_SIZE_COMPARATION ? WindowWidth / 30 : 15,
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
