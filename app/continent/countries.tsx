import type { FC } from 'react';
import type { ICountries, IPlates } from '@/config/Types';

import { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Image } from 'react-native';

import { Link, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import { useInterstitialAd } from 'react-native-google-mobile-ads';

import { DataFilterSorted, filterPlates, COUNTRY_SECTION_BANNER_V1, PLATE_TRANSITION_INTERSTITIAl_V1 } from '@/configs';
import { Filter, Plates, useFecth, LoadingActivity, AdBanner } from '@/components';
import { Actions, Context } from '@/Wrapper';
import Query from '@/config/Query';
import { Colors, Sizes } from '@/config';

import { ArrowLeft } from '@/assets/images/icons';

const ALL: string = 'All';

const Country: FC = (): JSX.Element => {
	const { isLoaded, isClosed, load, show } = useInterstitialAd(PLATE_TRANSITION_INTERSTITIAl_V1);

	const { data, isLoading } = useFecth({ type: 'countries', uri: Query.query.Category.query });
	const [filterSelected, setFilterSelected] = useState<string>(ALL);
	const { state, dispatch }: any = useContext(Context);
	const { CountryData } = state;
	const { description, flag, image, title, plates }: ICountries = CountryData.item;

	const DYNAMIC_BACKGROUND_COLOR: string = image.asset.metadata.palette.darkVibrant.background;

	const newItem: any = filterPlates(plates ?? [], filterSelected, ALL);
	const FilterData = DataFilterSorted(data, ALL);

	useEffect(() => {
		load();
	}, [load, isClosed]);

	if (isLoading) return <LoadingActivity />;

	return (
		<View style={{ flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
				<ImageBackground source={{ uri: image?.asset?.url }} style={styles.header} resizeMode='cover'>
					<Pressable onPress={(): void => router.back()} style={styles.back}>
						<ArrowLeft width={22} height={22} />
					</Pressable>
					<View style={styles.continent}>
						<Image style={styles.contientIcon} source={{ uri: flag?.asset?.url }} />
						<Text style={styles.continentText}>{title}</Text>
					</View>
					<LinearGradient colors={['rgba(0,0,0,0.1)', `${DYNAMIC_BACKGROUND_COLOR}`]} style={styles.linearGradient} />
				</ImageBackground>
				<View style={[styles.subheader, { backgroundColor: DYNAMIC_BACKGROUND_COLOR }]}>
					<View style={styles.subheaderSideOne}>
						<Text style={[styles.subheaderInfoText, styles.subheaderInfoPlates]}>{plates?.length ?? 0} - License Plates</Text>
						<Text style={styles.subheaderInfoDescription} numberOfLines={5}>
							{description}
						</Text>
					</View>
				</View>
				<Filter data={FilterData} setFilterSelected={setFilterSelected} filterSelected={filterSelected} styles={styles.filter} />
				<View style={styles.plates}>
					{newItem !== null && newItem.length > 0 ? (
						newItem.map((item: IPlates, i: number) => {
							return (
								<Link key={i} href={{ pathname: '/continent/plate' }} asChild>
									<Pressable
										onPress={() => {
											dispatch({ type: Actions.Plates, payload: { item, country: title } });
											if (isLoaded) show();
										}}
									>
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
			<AdBanner ID={COUNTRY_SECTION_BANNER_V1} />
		</View>
	);
};

const styles = StyleSheet.create({
	main: { backgroundColor: Colors.background },
	back: { marginTop: 30 },
	header: {
		height: Sizes.windowHeight / 2.9,
		width: Sizes.windowWidth,
		paddingHorizontal: Sizes.paddingHorizontal,
		paddingTop: 25,
		paddingBottom: 16,
		justifyContent: 'space-between',
	},
	continent: {
		flexDirection: 'row',
		alignItems: 'center',
		zIndex: 1,
	},
	contientIcon: {
		width: Sizes.windowWidth / 10,
		height: Sizes.windowHeight / 25,
		marginRight: 17,
		borderRadius: 4,
	},
	continentText: {
		fontSize: Sizes.ajustFontSize(25),
		fontWeight: 'bold',
		color: Colors.text,
	},
	linearGradient: { aspectRatio: 1, bottom: 0, left: 0, position: 'absolute', right: 0, opacity: 0.7, height: Sizes.windowHeight / 8 },
	subheader: {
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
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(16),
	},
	subheaderInfoPlates: {
		marginRight: 22,
		marginBottom: 20,
	},
	subheaderInfoText: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(16),
	},
	filter: { paddingHorizontal: Sizes.paddingHorizontal },
	plates: {
		paddingHorizontal: Sizes.paddingHorizontal,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 15,
		paddingBottom: 80,
	},
	nocontent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 200,
	},
	nocontentText: {
		color: Colors.text,
		fontWeight: 'bold',
		fontSize: Sizes.ajustFontSize(20),
	},
});

export default Country;
