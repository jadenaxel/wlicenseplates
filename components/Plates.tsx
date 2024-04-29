import type { FC } from 'react';
import type { IPlates } from '../config/Types';

import { View, StyleSheet, Image, Text } from 'react-native';

import { Sizes, Colors } from '@/config';

const Plates: FC<IPlates> = (props: IPlates): JSX.Element => {
	const { image, year }: IPlates = props;

	return (
		<View>
			<Image source={{ uri: image[0]?.asset?.url }} style={styles.plateImage} />
			<Text style={styles.plateText}>{year}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	plateImage: {
		width: Sizes.windowWidth / 2.3,
		height: Sizes.windowHeight / 10,
		resizeMode: 'cover',
		borderRadius: 4,
		marginBottom: 11,
	},
	plateText: {
		color: Colors.text,
		width: Sizes.windowWidth / 2.3,
		textAlign: 'center',
		fontSize: Sizes.ajustFontSize(15),
	},
});

export default Plates;
