// This code defines a component named AppLayout that uses the Tabs component from the Expo Router library. It also defines four screens that are used by the tabs. Each screen has a different icon and label.

// Imports for react types
import type { FC } from "react";

// Imports for Expo and Reac Native libraries

import { Text } from "react-native";
import { Tabs } from "expo-router/tabs";

// Others imports
import { Color } from "@/config";

import IExplorer from "@/assets/images/icons/explore";
import IFavorite from "@/assets/images/icons/heart";
import ISearch from "@/assets/images/icons/search";
import IMore from "@/assets/images/icons/more";

const AppLayout: FC = (): JSX.Element => {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: { backgroundColor: Color.black, borderTopWidth: 0 },
				tabBarHideOnKeyboard: true,
				tabBarActiveTintColor: Color.white,

				// tabBarLabelStyle: { fontSize: 12 },
				// tabBarItemStyle: { flexDirection: "column" },
			}}
			initialRouteName="favorite"
		>
			<Tabs.Screen
				name="explore"
				options={{
					headerShown: false,
					title: "Explore",
					tabBarIcon: ({ color }) => <IExplorer color={color} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray }}>Explore</Text>,
				}}
			/>

			<Tabs.Screen
				name="favorite"
				options={{
					headerShown: false,
					title: "Favorite",
					tabBarIcon: ({ color, size }) => <IFavorite color={color} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray }}>Favorite</Text>,
					unmountOnBlur: true,
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					headerShown: false,
					title: "Search",
					tabBarIcon: ({ color, size }) => <ISearch color={color} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray }}>Search</Text>,
					unmountOnBlur: true,
				}}
			/>
			<Tabs.Screen
				name="more"
				options={{
					headerShown: false,
					title: "More",
					tabBarIcon: ({ color, size }) => <IMore color={color} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray }}>More</Text>,
				}}
			/>
		</Tabs>
	);
};

export default AppLayout;
