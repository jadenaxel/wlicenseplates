import type { FC } from 'react';

import { StyleSheet, ScrollView, View, Text, Linking, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Title, useFecth, LoadingActivity, AdBanner } from '@/components';
import { Query, Ads, Colors, Sizes } from '@/config';

const More: FC = (): JSX.Element => {
	const { data, isLoading } = useFecth({ uri: Query.Others.Query });
	const { contribute_email, contribute_subject, contribute_description }: any = data;

	const MAIL_TO: string = `mailto:${contribute_email}?subject=${contribute_subject ?? ''}&body=${contribute_description ?? ''}`;

	if (isLoading) return <LoadingActivity />;

	return (
		<SafeAreaView style={styles.container}>
			<AdBanner ID={Ads.MORE_SECTION_BANNER_V1} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Title text='More' />
				{contribute_email.length > 0 && (
					<Pressable onPress={() => Linking.openURL(MAIL_TO)}>
						<View style={styles.contribute}>
							<Text style={styles.contributeText}>Contribute!</Text>
						</View>
					</Pressable>
				)}
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
		paddingHorizontal: Sizes.paddingHorizontal,
		backgroundColor: Colors.background,
	},
	videoAd: {
		backgroundColor: Colors.gray,
		borderRadius: 4,
		padding: 10,
		marginBottom: 20,
	},
	videoAdText: {
		textAlign: 'center',
	},
	contribute: {
		backgroundColor: Colors.gray,
		borderRadius: 4,
		padding: 10,
		marginBottom: 20,
	},
	contributeText: {
		textAlign: 'center',
		fontSize: Sizes.ajustFontSize(15),
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
