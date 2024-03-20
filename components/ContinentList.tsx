import type { FC } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import { ICountries } from '../types';
import { Color, WindowHeight, WindowWidth, paddingHorizontal } from '../config';

const ContinentList: FC<ICountries> = (props: ICountries | any): JSX.Element => {
	const { plates, title, flag }: ICountries = props;

	return (
		<View>
			<View style={styles.container}>
				<View style={styles.flagsContinaer}>
					<Image style={styles.flagsContinaerImage} source={{ uri: flag?.asset?.url }} />
					<Text style={styles.flagsContinaerText}>{title}</Text>
				</View>
				<Text style={styles.platesNumber}>{plates?.length ?? 0}</Text>
			</View>
			<View style={styles.line} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 15,
	},
	flagsContinaer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	flagsContinaerImage: {
		width: WindowWidth / 10,
		height: WindowHeight / 25,
		marginRight: 8.47,
		borderRadius: 4,
	},
	flagsContinaerText: {
		color: Color.white,
		fontSize: WindowWidth / 30,
	},
	platesNumber: {
		fontSize: WindowWidth / 25,
		color: Color.white,
	},
	line: {
		backgroundColor: Color.white,
		height: 1,
		opacity: 0.15,
		marginHorizontal: 16,
	},
});

export default ContinentList;
