import { type FC, useEffect, useState } from 'react';

import { StyleSheet, ScrollView, View, Text, Linking, Pressable, Alert } from 'react-native';
import { RewardedAd, RewardedAdEventType } from 'react-native-google-mobile-ads';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Color, WindowWidth, paddingHorizontal } from '@/config';
import { Title, useFecth, LoadingActivity, AdBanner } from '@/components';
import Query from '@/query';

const AD_UNIT_MORE: string = 'ca-app-pub-5125983390574582/1582337451';
const AD_UNIT_MORE_VIDEO: string = 'ca-app-pub-5125983390574582/3553840774';

const rewarded = RewardedAd.createForAdRequest(AD_UNIT_MORE_VIDEO, {
	keywords: ['game', 'apps'],
});

const More: FC = (): JSX.Element => {
	const [loaded, setLoaded] = useState<boolean>(true);
	const { data, isLoading } = useFecth({ uri: Query.query.Others.query });
	const { contribute_email, contribute_subject, contribute_description }: any = data;

	const MAIL_TO: string = `mailto:${contribute_email}?subject=${contribute_subject ?? ''}&body=${contribute_description ?? ''}`;

	useEffect(() => {
		const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => setLoaded(false));
		rewarded.load();

		return () => {
			unsubscribeLoaded();
		};
	}, []);

	if (isLoading || loaded) return <LoadingActivity />;

	return (
		<SafeAreaView style={styles.container}>
			<AdBanner ID={AD_UNIT_MORE} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Title text='More' />
				{contribute_email.length > 0 && (
					<Pressable onPress={() => Linking.openURL(MAIL_TO)}>
						<View style={styles.contribute}>
							<Text style={styles.contributeText}>Contribute!</Text>
						</View>
					</Pressable>
				)}
				<Pressable
					onPress={() => {
						try {
							rewarded.show();
						} catch (e) {
							Alert.alert('Wait a minute...');
						}
					}}
				>
					<View style={styles.videoAd}>
						<Text style={styles.videoAdText}>Watch Ads!!!</Text>
					</View>
				</Pressable>
				{/* <View style={styles.appC}>
					{new Array(10).fill(2).map((item: number, i: number) => {
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
	videoAd: {
		backgroundColor: Color.gray,
		borderRadius: 4,
		padding: 10,
		marginBottom: 20,
	},
	videoAdText: {
		textAlign: 'center',
	},
	contribute: {
		backgroundColor: Color.gray,
		borderRadius: 4,
		padding: 10,
		marginBottom: 20,
	},
	contributeText: {
		textAlign: 'center',
		fontSize: WindowWidth / 25,
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
