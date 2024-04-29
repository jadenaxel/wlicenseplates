import type { FC } from 'react';
import type { ICountries } from '../config/Types';

import { Fragment } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, Sizes } from '@/config';

const ContinentList: FC<ICountries> = (props: ICountries | any): JSX.Element => {
	const { plates, title, flag }: ICountries = props;

	return (
		<Fragment>
			<View style={styles.container}>
				<View style={styles.flagsContinaer}>
					<Image style={styles.flagsContinaerImage} source={{ uri: flag?.asset?.url }} />
					<Text style={styles.flagsContinaerText}>{title}</Text>
				</View>
				<Text style={styles.platesNumber}>{plates?.length ?? 0}</Text>
			</View>
			<View style={styles.line} />
		</Fragment>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: Sizes.paddingHorizontal,
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
		width: Sizes.windowWidth / 10,
		height: Sizes.windowHeight / 25,
		marginRight: 8.47,
		borderRadius: 4,
	},
	flagsContinaerText: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(16),
	},
	platesNumber: {
		fontSize: Sizes.ajustFontSize(16),
		color: Colors.text,
	},
	line: {
		backgroundColor: Colors.text,
		height: 1,
		opacity: 0.15,
		marginHorizontal: 16,
	},
});

export default ContinentList;
