import type { FC } from 'react';
import type { IPlates } from '@/config/Types';

import { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Image, Modal } from 'react-native';

import { router } from 'expo-router';

import { Context } from '@/Wrapper';
import { Cross, Heart } from '@/assets/images/icons';
import { AdBanner } from '@/components';
import { Ads, Colors, LocalStorage as LS, Sizes } from '@/config';

type TPlates = IPlates | any;

const Plate: FC = (): JSX.Element => {
	const [heart, setHeart] = useState<boolean>(false);
	const [modalImage, setModalImage] = useState<string>('');
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	const { state }: any = useContext(Context);

	const { PlatesData } = state;

	const { bg, year, image, description, eligibility, plateType, note }: TPlates = PlatesData;

	const LocalStorage = async (): Promise<any> => {
		const getTitle: any = await LS.GetPlates(year);
		setHeart(getTitle?.length > 0 ? true : false);
	};

	const handleHeart = (): void => {
		heart ? LS.RemoveHeartPlates(PlatesData) : LS.SavePlates(PlatesData);
		setHeart((prev: boolean): boolean => !prev);
	};

	useEffect((): void => {
		LocalStorage();
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<ScrollView style={styles.main}>
				<ImageBackground source={{ uri: bg?.asset?.url }} style={styles.header} resizeMode='cover' blurRadius={3}>
					<View style={styles.action_button}>
						<Pressable onPress={handleHeart}>
							<Heart width={22} height={22} color={heart ? 'red' : 'white'} fill={heart ? 'red' : 'none'} />
						</Pressable>
						<Pressable onPress={() => router.back()}>
							<Cross width={22} height={22} />
						</Pressable>
					</View>
					<View>
						<Text style={styles.continentTextYear}>{year}</Text>
						<Text style={styles.continentTextTitle}>Year</Text>
					</View>
				</ImageBackground>
				<View style={styles.content}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{image.map((item: any, i: number) => {
							return (
								<Pressable
									key={i}
									onPress={() => {
										setModalVisible(true);
										setModalImage(item?.asset?.url);
									}}
								>
									<View style={styles.platesContainer}>
										<Image source={{ uri: item?.asset?.url }} style={styles.platesImages} />
									</View>
								</Pressable>
							);
						})}
					</ScrollView>
					<Modal
						animationType='slide'
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							setModalVisible(!modalVisible);
						}}
					>
						<View style={styles.modalContainer}>
							<View style={styles.modalContent}>
								<Image source={{ uri: modalImage }} style={styles.modalImage} />
							</View>
							<Pressable onPress={() => setModalVisible(false)}>
								<Cross width={22} height={22} />
							</Pressable>
						</View>
					</Modal>
					{description ? (
						<View style={styles.description}>
							<Text style={styles.descriptionText}>{description}</Text>
						</View>
					) : null}
					<View style={styles.detail}>
						{eligibility ? (
							<View style={styles.detailE}>
								<Text style={styles.detailETitle}>Eligibility</Text>
								<Text style={styles.detailEText}>{eligibility}</Text>
							</View>
						) : null}
						{plateType ? (
							<View style={styles.detailE}>
								<Text style={styles.detailTTitle}>Plate Type</Text>
								<Text style={styles.detailTText}>{plateType}</Text>
							</View>
						) : null}
					</View>
					{note ? (
						<View style={{ padding: 10 }}>
							<Text style={styles.noteTitle}>Note:</Text>
							<Text style={styles.noteText}>{note}</Text>
						</View>
					) : null}
				</View>
			</ScrollView>
			<AdBanner ID={Ads.PLATE_SECTION_BANNER_V1} />
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
		width: Sizes.windowWidth,
		paddingHorizontal: Sizes.paddingHorizontal,
		paddingTop: 25,
		paddingBottom: 16,
		justifyContent: 'space-between',
		marginBottom: 16,
	},
	action_button: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		alignSelf: 'flex-end',
		marginTop: 30,
	},
	content: { paddingHorizontal: Sizes.paddingHorizontal },
	continentTextYear: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(20),
		fontWeight: 'bold',
	},
	continentTextTitle: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(25),
		textTransform: 'uppercase',
	},
	platesContainer: {
		borderRadius: 4,
		backgroundColor: Colors.text,
		paddingHorizontal: 8.37,
		paddingVertical: 5.14,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
		marginBottom: 16,
	},
	platesImages: {
		width: Sizes.windowWidth / 4,
		height: Sizes.windowHeight / 15,
		resizeMode: 'contain',
	},
	modalContainer: {
		width: Sizes.windowWidth,
		height: Sizes.windowHeight,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		backgroundColor: Colors.text,
		borderRadius: 6,
		borderColor: Colors.background,
		borderWidth: 1,
		width: Sizes.windowWidth / 1.6,
		height: Sizes.windowHeight / 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalImage: {
		width: Sizes.windowWidth / 2,
		height: Sizes.windowHeight / 7,
		resizeMode: 'contain',
	},
	description: {
		marginVertical: 15,
		backgroundColor: '#171717',
		borderRadius: 14,
		paddingHorizontal: 11.07,
		paddingVertical: 23.06,
	},
	descriptionText: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(15),
	},
	detail: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	detailE: {
		backgroundColor: '#171717',
		borderRadius: 14,
		paddingVertical: 12,
		paddingLeft: 12,
		paddingRight: 16,
		width: Sizes.windowWidth / 2.2,
		minHeight: Sizes.windowHeight / 6,
		height: '100%',
	},
	detailETitle: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(20),
		marginBottom: 10,
		fontWeight: 'bold',
	},
	detailEText: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(15),
	},
	detailTTitle: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(20),
		marginBottom: 10,
		fontWeight: 'bold',
	},
	detailTText: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(15),
	},
	noteTitle: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(20),
		marginBottom: 10,
		fontWeight: 'bold',
	},
	noteText: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(15),
	},
});

export default Plate;
