import type { FC } from 'react';
import type { Filter } from '@/config/Types';

import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

import { Sizes, Colors } from '@/config';

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
		<View style={[styles.container, isSelected === title && { backgroundColor: Colors.red }]}>
			<Text style={[styles.text, isSelected === title && { color: Colors.text }]}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 24,
		paddingVertical: 6,
		paddingHorizontal: Sizes.paddingHorizontal,
		backgroundColor: '#D6D6D6',
		marginRight: 8,
		marginBottom: 15,
	},
	text: {
		fontSize: Sizes.ajustFontSize(),
	},
});

export default FilterH;
