import type { FC } from 'react';
import type { ICountries, IPlates } from '@/types';

import { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Image } from 'react-native';

import { Link, router } from 'expo-router';

import { Color, SCREEN_SIZE_COMPARATION, WindowHeight, WindowWidth, paddingHorizontal } from '@/config';
import { Filter, Plates, useFecth, LoadingActivity } from '@/components';
import { Actions, Context } from '@/Wrapper';
import Query from '@/query';

import { ArrowLeft } from '@/assets/images/icons';

const ALL: string = 'All';

const ARROW_BACK_ICON: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 15 : 22;

const Country: FC = (): JSX.Element => {
	const [filterSelected, setFilterSelected] = useState<string>(ALL);
	const { state, dispatch }: any = useContext(Context);
	const { data, isLoading } = useFecth({ type: 'countries', uri: Query.query.Category.query });
	const { description, flag, image, title, plates }: ICountries = state.CountryData.item;

	const filterPlates = (plates: any, filter: any) => {
		if (filter === ALL) return plates;

		return plates.filter((plate: any) => {
			return plate.categories.some((cat: any) => cat.title === filter);
		});
	};

	const newItem: any = filterPlates(plates, filterSelected);

	if (isLoading) return <LoadingActivity />;

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
			<ImageBackground source={{ uri: image?.asset?.url }} style={styles.header} resizeMode='cover'>
				<Pressable onPress={(): void => router.back()} style={styles.back}>
					<ArrowLeft width={ARROW_BACK_ICON} height={ARROW_BACK_ICON} />
				</Pressable>
				<View style={styles.continent}>
					<Image style={styles.contientIcon} source={{ uri: flag?.asset?.url }} />
					<Text style={styles.continentText}>{title}</Text>
				</View>
			</ImageBackground>
			<View style={styles.subheader}>
				<View style={styles.subheaderSideOne}>
					<Text style={[styles.subheaderInfoText, styles.subheaderInfoPlates]}>{plates?.length ?? 0} - License Plates</Text>
					<Text style={styles.subheaderInfoDescription}>{description}</Text>
				</View>
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filter}>
				{data.length > 0 &&
					newItem?.length > 0 &&
					data.map((item: any, i: number) => {
						return (
							<Pressable key={i} onPress={() => setFilterSelected(item.title)}>
								<Filter title={item.title} isSelected={filterSelected} />
							</Pressable>
						);
					})}
			</ScrollView>

			<View style={styles.plates}>
				{newItem ? (
					newItem.map((item: IPlates, i: number) => {
						return (
							<Link key={i} href={{ pathname: '/continent/plate' }} asChild>
								<Pressable onPress={() => dispatch({ type: Actions.Plates, payload: { item, country: title } })}>
									<Plates {...item} />
								</Pressable>
							</Link>
						);
					})
				) : (
					<View style={styles.nocontent}>
						<Text style={styles.nocontentText}>There's no content</Text>
					</View>
				)}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Color.black,
	},
	back: {
		marginTop: 30,
	},
	header: {
		height: WindowHeight / 2.9,
		width: WindowWidth,
		paddingHorizontal: 17,
		paddingTop: 25,
		paddingBottom: 16,
		justifyContent: 'space-between',
	},
	continent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	contientIcon: {
		width: WindowWidth / 10,
		height: WindowHeight / 25,
		marginRight: 17,
		borderRadius: 4,
	},
	continentText: {
		fontSize: WindowWidth / 15,
		fontWeight: 'bold',
		color: Color.white,
	},
	subheader: {
		backgroundColor: '#463F41',
		paddingHorizontal: 16,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	subheaderSideOne: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	subheaderInfoDescription: {
		color: Color.white,
		fontSize: WindowWidth / 25,
	},
	subheaderInfoPlates: {
		marginRight: 22,
		marginBottom: 20,
	},
	subheaderInfoText: {
		color: Color.white,
		fontSize: WindowWidth / 25,
	},
	filter: {
		paddingHorizontal,
	},
	plates: {
		paddingHorizontal,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 15,
	},
	nocontent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	nocontentText: {
		color: Color.white,
		fontWeight: 'bold',
		fontSize: WindowWidth / 20,
	},
});

export default Country;
