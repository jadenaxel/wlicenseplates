import type { FC } from 'react';

import { useContext, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { router, Link } from 'expo-router';

import { ICard } from '@/types';
import { Color, WindowWidth, paddingHorizontal, elements, WindowHeight, SCREEN_SIZE_COMPARATION, tableWidth } from '@/config';
import { ContinentList, POPUP } from '@/components';
import { Actions, Context } from '@/Wrapper';

import { SVGIcon } from '@/components/Card';
import { ArrowLeft } from '@/assets/images/icons';

const ARROW_BACK_ICON: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 15 : 22;

const Continent: FC = (): JSX.Element => {
	const [isFilter, setIsFilter] = useState<string>('Random');
	const { state, dispatch }: any = useContext(Context);

	const { title, description, countries, image }: ICard = state.ContinentData;

	const DYNAMIC_BACKGROUND_COLOR: string = image.asset.metadata.palette.darkVibrant.background;

	const sortType = (a: any, b: any) => {
		if (isFilter === 'Random') return Math.random() - 0.5;
		else return a.title.localeCompare(b.title);
	};

	const TOTAL_PLATES: number = countries?.reduce((acc: any, country: any) => acc.plates.length + country.plates.length);
	const PLATES_LESS: number = countries?.map((acc: any) => acc.plates.length)[0];

	const PLATES_VALIDATION = TOTAL_PLATES !== undefined && typeof TOTAL_PLATES === 'number' ? TOTAL_PLATES : PLATES_LESS;

	return (
		<View style={styles.main}>
			<ImageBackground source={{ uri: image?.asset?.url }} style={styles.header} resizeMode='cover'>
				<View style={styles.headerContent}>
					<Pressable onPress={(): void => router.back()} style={styles.back}>
						<ArrowLeft width={ARROW_BACK_ICON} height={ARROW_BACK_ICON} />
					</Pressable>
					<View style={styles.continent}>
						<SVGIcon name={title} ele={elements} width={WindowWidth / 10} height={WindowHeight / 2.4} />
						<Text style={styles.continentText}>{title}</Text>
					</View>
				</View>
				<LinearGradient colors={['rgba(0,0,0,0.1)', `${DYNAMIC_BACKGROUND_COLOR}`]} style={styles.linearGradient} />
			</ImageBackground>
			<View style={[styles.subheader, { backgroundColor: DYNAMIC_BACKGROUND_COLOR }]}>
				<View style={styles.subheaderSideOne}>
					<View style={styles.subheaderInfo}>
						<Text style={[styles.subheaderInfoText, styles.subheaderInfoPlates]}>{PLATES_VALIDATION ?? 0} - License Plates</Text>
						<Text style={styles.subheaderInfoText}>{countries?.length ?? 0} Countries</Text>
					</View>
					<Text style={styles.subheaderInfoDescription}>{description}</Text>
				</View>
				{WindowWidth < tableWidth ? <POPUP setIsFilter={setIsFilter} /> : null}
			</View>
			{countries ? (
				countries.sort(sortType).map((item: any, i: number) => {
					return (
						<Link key={i} href={{ pathname: '/continent/countries' }} asChild>
							<Pressable onPress={() => dispatch({ type: Actions.Country, payload: { item } })}>
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
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Color.black,
	},
	header: {
		height: WindowHeight / 2.9,
		paddingHorizontal,
		paddingTop: 25,
	},
	headerContent: {
		zIndex: 1,
	},
	back: {
		marginTop: 30,
	},
	subheader: {
		padding: paddingHorizontal,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 7,
	},
	subheaderSideOne: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: WindowWidth / 1.2,
	},
	subheaderInfo: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	subheaderInfoDescription: {
		color: Color.white,
		fontSize: WindowWidth / 25,
	},
	subheaderInfoPlates: {
		marginRight: 22,
	},
	subheaderInfoText: {
		color: Color.white,
		fontSize: WindowWidth / 25,
	},
	continent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	continentText: {
		fontSize: WindowWidth / 11,
		fontWeight: 'bold',
		color: Color.white,
		marginLeft: 17,
	},
	linearGradient: { aspectRatio: 1, bottom: 0, left: 0, position: 'absolute', right: 0, opacity: 0.7, height: WindowHeight / 8 },
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
		color: Color.white,
		fontWeight: 'bold',
		fontSize: WindowWidth / 20,
	},
});

export default Continent;
