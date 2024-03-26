import type { FC } from 'react';
import type { Filter } from '@/types';

import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

import { Color, WindowWidth, paddingHorizontal, SCREEN_SIZE_COMPARATION } from '@/config';

const TEXT_SIZE = SCREEN_SIZE_COMPARATION ? WindowWidth / 40 : WindowWidth / 30;

const FilterH: FC<any> = ({ data, setFilterSelected, filterSelected, condiction, styles }: any): JSX.Element => {
	const renderedData = data.map((item: any, i: number) => {
		return (
			<Pressable key={i} onPress={() => setFilterSelected(item.title)}>
				<Filter title={item.title} isSelected={filterSelected} />
			</Pressable>
		);
	});

	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles}>
			{condiction ? renderedData : null}
			{condiction === undefined ? renderedData : null}
		</ScrollView>
	);
};

const Filter: FC<any> = (props: Filter): JSX.Element => {
	const { title, isSelected }: Filter = props;

	return (
		<View style={[styles.container, isSelected === title ? { backgroundColor: Color.red } : {}]}>
			<Text style={[styles.text, isSelected === title ? { color: Color.white } : {}]}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 24,
		paddingVertical: 6,
		paddingHorizontal,
		backgroundColor: '#D6D6D6',
		marginRight: 8,
		marginBottom: 15,
	},
	text: {
		fontSize: TEXT_SIZE,
	},
});

export default FilterH;
