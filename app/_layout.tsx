import type { FC } from "react";

import { Tabs } from "expo-router/tabs";

const AppLayout: FC = (): JSX.Element => {
	return (
		<Tabs>
			<Tabs.Screen name="index" options={{ headerShown: false, title: "Explore" }} />
			<Tabs.Screen name="search" options={{ headerShown: false, title: "Search" }} />
			<Tabs.Screen name="favorite" options={{ headerShown: false, title: "Favorite" }} />
		</Tabs>
	);
};

export default AppLayout;
