import type { FC } from 'react';

import { Stack } from 'expo-router';

import Wrapper from '@/Wrapper';

const StackLayout: FC = (): JSX.Element => {
	return (
		<Wrapper>
			<Stack screenOptions={{ headerShown: false, animation: 'ios' }}>
				<Stack.Screen name='(tabs)' />
			</Stack>
		</Wrapper>
	);
};

export default StackLayout;
