// Imports for react types
import type { FC } from 'react';

// Imports for Expo and Reac Native libraries
import { useContext } from 'react';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

// Others imports
import { Colors, Sizes } from '@/config';
import { Card, Title } from '@/components';
import { ICard } from '@/config/Types';
import { Actions, Context } from '@/Wrapper';

const Home: FC = (): JSX.Element => {
	const { state, dispatch }: any = useContext(Context);

	const { Data } = state;

	return (
		<SafeAreaView style={styles.body}>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
				<Title text='Explore' />
				<View style={styles.group}>
					{Data.map((item: ICard | any, i: number) => (
						<Link key={i} href={{ pathname: '/continent' }} asChild>
							<Pressable
								onPress={() =>
									dispatch({
										type: Actions.Continent,
										payload: {
											image: item.image,
											title: item.title,
											description: item.description,
											countries: item.countries,
										},
									})
								}
							>
								<Card {...item} />
							</Pressable>
						</Link>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	container: { paddingHorizontal: Sizes.paddingHorizontal },
	group: {
		marginVertical: 15,
		gap: 15,
	},
});

export default Home;
