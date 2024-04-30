import type { FC } from 'react';

import { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { router, Link } from 'expo-router';

import { useInterstitialAd } from 'react-native-google-mobile-ads';

import { ContinentList, AdBanner } from '@/components';
import { Actions, Context } from '@/Wrapper';
import { SVGIcon } from '@/components/Card';
import { ArrowLeft } from '@/assets/images/icons';
import { Sizes, Constants, ICard, Ads, Colors } from '@/config';

const Continent: FC = (): JSX.Element => {
	const { isLoaded, isClosed, load, show } = useInterstitialAd(Ads.COUNTRY_TRANSITION_INTERSTITIAl_V1);
	const { state, dispatch }: any = useContext(Context);

	const { ContinentData } = state;
	const { title, description, countries, image }: ICard = ContinentData;

	const DYNAMIC_BACKGROUND_COLOR: string = image.asset.metadata.palette.darkVibrant.background;

	const TOTAL_PLATES: number = countries?.reduce((acc: any, country: any) => {
		const VALUE = country.plates?.length ?? 0;
		return acc + VALUE;
	}, 0);

	useEffect(() => {
		load();
	}, [load, isClosed]);

	return (
		<View style={{ flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
				<ImageBackground source={{ uri: image?.asset?.url }} style={styles.header} resizeMode='cover'>
					<View style={styles.headerContent}>
						<Pressable onPress={(): void => router.back()} style={styles.back}>
							<ArrowLeft width={22} height={22} />
						</Pressable>
						<View style={styles.continent}>
							<SVGIcon name={title} ele={Constants.elements} width={Sizes.windowWidth / 10} height={Sizes.windowHeight / 2.4} />
							<Text style={styles.continentText}>{title}</Text>
						</View>
					</View>
					<LinearGradient colors={['rgba(0,0,0,0.1)', `${DYNAMIC_BACKGROUND_COLOR}`]} style={styles.linearGradient} />
				</ImageBackground>
				<View style={[styles.subheader, { backgroundColor: DYNAMIC_BACKGROUND_COLOR }]}>
					<View style={styles.subheaderSideOne}>
						<View style={styles.subheaderInfo}>
							<Text style={[styles.subheaderInfoText, styles.subheaderInfoPlates]}>{TOTAL_PLATES ?? 0} - License Plates</Text>
							<Text style={styles.subheaderInfoText}>{countries?.length ?? 0} Countries</Text>
						</View>
						<Text style={styles.subheaderInfoDescription} numberOfLines={5}>
							{description}
						</Text>
					</View>
				</View>
				{countries ? (
					countries.map((item: any, i: number) => {
						return (
							<Link key={i} href={{ pathname: '/continent/countries' }} asChild>
								<Pressable
									onPress={() => {
										dispatch({ type: Actions.Country, payload: { item } });
										if (isLoaded) show();
									}}
								>
									<ContinentList {...item} />
								</Pressable>
							</Link>
						);
					})
				) : (
					<View style={styles.nocontent}>
						<Text style={styles.nocontentText}>There's no content</Text>
					</View>
				)}
			</ScrollView>
			<AdBanner ID={Ads.CONTINENT_SECTION_BANNER_V1} />
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		backgroundColor: Colors.background,
		paddingBottom: 70,
	},
	header: {
		height: Sizes.windowHeight / 2.9,
		paddingHorizontal: Sizes.paddingHorizontal,
		paddingTop: 25,
	},
	headerContent: {
		zIndex: 1,
	},
	back: {
		marginTop: 30,
	},
	subheader: {
		padding: Sizes.paddingHorizontal,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 7,
	},
	subheaderSideOne: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: Sizes.windowWidth / 1.2,
	},
	subheaderInfo: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	subheaderInfoDescription: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(16),
	},
	subheaderInfoPlates: {
		marginRight: 22,
	},
	subheaderInfoText: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(16),
	},
	continent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	continentText: {
		fontSize: Sizes.ajustFontSize(30),
		fontWeight: 'bold',
		color: Colors.text,
		marginLeft: 17,
	},
	linearGradient: {
		aspectRatio: 1,
		bottom: 0,
		left: 0,
		position: 'absolute',
		right: 0,
		opacity: 0.7,
		height: Sizes.windowHeight / 8,
	},
	subheaderIcon: {
		alignSelf: 'flex-end',
		marginBottom: 16,
	},
	nocontent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	nocontentText: {
		color: Colors.text,
		fontWeight: 'bold',
		fontSize: Sizes.ajustFontSize(20),
	},
});

export default Continent;
