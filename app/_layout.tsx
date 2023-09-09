import type { FC } from "react";

import { Text } from "react-native";

import { Tabs } from "expo-router/tabs";

import { Icons } from "../components";
import { Color } from "../config";

const AppLayout: FC = (): JSX.Element => {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: { backgroundColor: Color.black, borderTopWidth: 0 },
				tabBarHideOnKeyboard: true,
				tabBarActiveTintColor: Color.white,
				tabBarLabelStyle: { fontSize: 12 },
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
					title: "Explore",
					tabBarIcon: ({ color, size }) => <Icons.Explore color={color} size={size} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray }}>Explore</Text>,
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					headerShown: false,
					title: "Search",
					tabBarIcon: ({ color, size }) => <Icons.SearchIcon color={color} size={size} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray }}>Search</Text>,
				}}
			/>
			<Tabs.Screen
				name="favorite"
				options={{
					headerShown: false,
					title: "Favorite",
					tabBarIcon: ({ color, size }) => <Icons.HeartIcon color={color} size={size} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray }}>Favorite</Text>,
				}}
			/>
			<Tabs.Screen
				name="more"
				options={{
					headerShown: false,
					title: "More",
					tabBarIcon: ({ color, size }) => <Icons.FireIcon color={color} size={size} />,
					tabBarLabel: ({ focused }) => <Text style={{ color: focused ? Color.red : Color.gray }}>More</Text>,
				}}
			/>
		</Tabs>
	);
};

export default AppLayout;
