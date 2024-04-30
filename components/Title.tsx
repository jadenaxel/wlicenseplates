import type { FC } from 'react';

import { Text, StyleSheet } from 'react-native';

import { Colors, Sizes } from '@/config';

const Title: FC<{ text: string }> = ({ text }: { text: string }): JSX.Element => {
	return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
	text: {
		color: Colors.text,
		fontSize: Sizes.ajustFontSize(30),
		marginVertical: 7,
		fontWeight: '700',
	},
});

export default Title;
