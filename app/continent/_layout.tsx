import { Stack } from "expo-router";

const StackLayout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="index"
				options={{
					headerTransparent: true,
					headerShown: false,
				}}
			/>
			<Stack.Screen name="country" />
			<Stack.Screen name="plate" />
		</Stack>
	);
};

export default StackLayout;
