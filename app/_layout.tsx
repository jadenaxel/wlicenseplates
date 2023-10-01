import type { FC } from "react";

import { Stack } from "expo-router";

const StackLayout: FC = (): JSX.Element => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="(tabs)" />
		</Stack>
	);
};

export default StackLayout;
