// This code defines a component named AppLayout that uses the Tabs component from the Expo Router library. It also defines four screens that are used by the tabs. Each screen has a different icon and label.

// Imports for react types
import type { FC } from 'react';

// Imports for Expo and Reac Native libraries

import { Text } from 'react-native';
import { Tabs } from 'expo-router/tabs';

// Others imports
import { Color, SCREEN_SIZE_COMPARATION, WindowHeight, WindowWidth } from '@/config';

// Imports of icons for tab bottom navigation
import { IExplorer, IFavorite, ISearch, IMore } from '@/assets/images/icons';

// Constant value for icons size
const ICON_SIZE: number = 25;

const ICON_SIZE_MOBILE_WIDTH: number = SCREEN_SIZE_COMPARATION ? WindowWidth / ICON_SIZE : WindowWidth / 5;
const ICON_SIZE_MOBILE_HEIGHT: number = SCREEN_SIZE_COMPARATION ? WindowHeight / ICON_SIZE : 20;

const FONT_SIZE_MOBILE_WIDTH: number = SCREEN_SIZE_COMPARATION ? WindowWidth / 39 : WindowWidth / 26;

const MARING_RIGHT_SIZE: number = SCREEN_SIZE_COMPARATION ? ICON_SIZE : 0;

const AppLayout: FC = (): JSX.Element => {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: { backgroundColor: Color.black, borderTopWidth: 0, flexDirection: 'column' },
				tabBarHideOnKeyboard: true,
				tabBarActiveTintColor: Color.white,
				tabBarIconStyle: {
					marginRight: MARING_RIGHT_SIZE,
				},
			}}
		>
			<Tabs.Screen
				name='explore'
				options={{
					headerShown: false,
					title: 'Explore',
					tabBarIcon: ({ color }) => <IExplorer color={color} width={ICON_SIZE_MOBILE_WIDTH} height={ICON_SIZE_MOBILE_HEIGHT} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray, fontSize: FONT_SIZE_MOBILE_WIDTH }}>Explore</Text>,
				}}
			/>

			<Tabs.Screen
				name='favorite'
				options={{
					headerShown: false,
					title: 'Favorite',
					tabBarIcon: ({ color }) => <IFavorite color={color} width={ICON_SIZE_MOBILE_WIDTH} height={ICON_SIZE_MOBILE_HEIGHT} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray, fontSize: FONT_SIZE_MOBILE_WIDTH }}>Favorite</Text>,
					unmountOnBlur: true,
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					headerShown: false,
					title: 'Search',
					tabBarIcon: ({ color }) => <ISearch color={color} width={ICON_SIZE_MOBILE_WIDTH} height={ICON_SIZE_MOBILE_HEIGHT} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray, fontSize: FONT_SIZE_MOBILE_WIDTH }}>Search</Text>,
				}}
			/>
			<Tabs.Screen
				name='more'
				options={{
					headerShown: false,
					title: 'More',
					tabBarIcon: ({ color }) => <IMore color={color} width={ICON_SIZE_MOBILE_WIDTH} height={ICON_SIZE_MOBILE_HEIGHT} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray, fontSize: FONT_SIZE_MOBILE_WIDTH }}>More</Text>,
				}}
			/>
		</Tabs>
	);
};

export default AppLayout;
