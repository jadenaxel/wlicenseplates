// This code defines a component named AppLayout that uses the Tabs component from the Expo Router library. It also defines four screens that are used by the tabs. Each screen has a different icon and label.

// Imports for react types
import type { FC } from 'react';

// Imports for Expo and Reac Native libraries

import { Text } from 'react-native';
import { Tabs } from 'expo-router/tabs';

// Imports of icons for tab bottom navigation
import { IExplorer, IFavorite, ISearch, IMore } from '@/assets/images/icons';
import { Sizes, Colors } from '@/config';

const ICON_SIZE_MOBILE_WIDTH: number = Sizes.windowWidth / 5;
const ICON_SIZE_MOBILE_HEIGHT: number = 20;
const fontSize = { fontSize: Sizes.ajustFontSize(14) };

const AppLayout: FC = (): JSX.Element => {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					backgroundColor: Colors.background,
					borderTopWidth: 0,
				},
				headerShown: false,
				tabBarActiveTintColor: Colors.text,
			}}
		>
			<Tabs.Screen
				name='explore'
				options={{
					title: 'Explore',
					tabBarIcon: ({ color }) => <IExplorer color={color} width={ICON_SIZE_MOBILE_WIDTH} height={ICON_SIZE_MOBILE_HEIGHT} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Colors.red : Colors.gray, ...fontSize }}>Explore</Text>,
				}}
			/>

			<Tabs.Screen
				name='favorite'
				options={{
					title: 'Favorite',
					tabBarIcon: ({ color }) => <IFavorite color={color} width={ICON_SIZE_MOBILE_WIDTH} height={ICON_SIZE_MOBILE_HEIGHT} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Colors.red : Colors.gray, ...fontSize }}>Favorite</Text>,
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					tabBarIcon: ({ color }) => <ISearch color={color} width={ICON_SIZE_MOBILE_WIDTH} height={ICON_SIZE_MOBILE_HEIGHT} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Colors.red : Colors.gray, ...fontSize }}>Search</Text>,
				}}
			/>
			<Tabs.Screen
				name='more'
				options={{
					title: 'More',
					tabBarIcon: ({ color }) => <IMore color={color} width={ICON_SIZE_MOBILE_WIDTH} height={ICON_SIZE_MOBILE_HEIGHT} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Colors.red : Colors.gray, ...fontSize }}>More</Text>,
				}}
			/>
		</Tabs>
	);
};

export default AppLayout;
