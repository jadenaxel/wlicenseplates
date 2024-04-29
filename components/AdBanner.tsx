import type { FC } from 'react';

import { View, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

import { Sizes } from '@/config';

const AdBanner: FC<any> = ({ ID }: { ID: string }): JSX.Element => {
	return (
		<View style={styles.bannerAd}>
			<BannerAd unitId={ID} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
		</View>
	);
};
const styles = StyleSheet.create({
	bannerAd: {
		position: 'absolute',
		bottom: 0,
		width: Sizes.windowWidth,
	},
});

export default AdBanner;
