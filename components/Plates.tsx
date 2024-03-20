import type { FC } from 'react';

import { View, StyleSheet, Image, Text } from 'react-native';

import { IPlates } from '../types';
import { Color, SCREEN_SIZE_COMPARATION, WindowHeight, WindowWidth } from '../config';

const PLATES_SIZE: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 3.3 : WindowWidth / 2.3;

const Plates: FC<IPlates> = (props: IPlates): JSX.Element => {
	const { image, title }: IPlates = props;

	return (
		<View>
			<Image source={{ uri: image[0]?.asset?.url }} style={styles.plateImage} />
			<Text style={styles.plateText}>{title}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	plateImage: {
		width: PLATES_SIZE,
		height: WindowHeight / 10,
		resizeMode: 'cover',
		borderRadius: 4,
		marginBottom: 11,
	},
	plateText: {
		color: Color.white,
		width: PLATES_SIZE,
		textAlign: 'center',
		fontSize: WindowWidth / 25,
	},
});

export default Plates;
