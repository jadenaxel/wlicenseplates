// Imports for react types
import type { FC } from 'react';

// Imports for Expo and Reac Native libraries
import { useContext } from 'react';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Link } from 'expo-router';

// Others imports
import { Color, paddingHorizontal } from '@/config';
import { Card, Title } from '@/components';
import { ICard } from '@/types';
import { Actions, Context } from '@/Wrapper';

const Home: FC = (): JSX.Element => {
	const { state, dispatch }: any = useContext(Context);

	return (
		<SafeAreaView style={styles.body}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<Title text='Explore' />
					<View style={styles.group}>
						{state.Data.map((item: ICard | any, i: number) => {
							return (
								<Link key={i} href={{ pathname: '/continent' }} asChild>
									<Pressable
										onPress={() =>
											dispatch({
												type: Actions.Continent,
												payload: {
													image: item.image,
													title: item.title,
													platesNumber: item.platesNumber,
													description: item.description,
													countries: item.countries,
												},
											})
										}
									>
										<Card {...item} />
									</Pressable>
								</Link>
							);
						})}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: Color.black,
	},
	container: { paddingHorizontal },
	group: { marginVertical: 15 },
});

export default Home;
