import type { FC } from 'react';

import { StyleSheet, ScrollView } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Color, WindowWidth, paddingHorizontal } from '@/config';
import { Title } from '@/components';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-3735161146039232/8868030605';


const More: FC = (): JSX.Element => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Title text='More' />
				<BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
				{/* <View style={styles.appC}>
					{new Array(0).fill(2).map((item: number, i: number) => {
						return (
							<View style={styles.app} key={i}>
								<View style={styles.appView}></View>
								<Text style={styles.appName}>App Name</Text>
							</View>
						);
					})}
				</View> */}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal,
		backgroundColor: Color.black,
	},
	buyacoffee: {
		backgroundColor: '#FFFF64',
		borderRadius: 14,
		paddingHorizontal: 14,
		paddingVertical: 28,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 15,
	},
	coffee: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	coffeeText: {
		fontSize: WindowWidth / 20,
		fontWeight: 'bold',
		width: WindowWidth / 3,
		marginLeft: 13,
	},
	goButton: {
		paddingHorizontal: 35,
		paddingVertical: 11,
		borderRadius: 14,
		borderColor: '#000',
		borderWidth: 2,
	},
	goButtonText: {
		fontSize: 15,
		fontWeight: '700',
	},
	appC: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 10,
		justifyContent: 'space-between',
	},
	app: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	appView: {
		width: 80.696,
		height: 80.696,
		borderRadius: 15,
		backgroundColor: '#D9D9D9',
		marginBottom: 10,
	},
	appName: {
		fontSize: 12,
		color: '#FFF',
	},
});

export default More;
