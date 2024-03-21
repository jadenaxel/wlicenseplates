// Imports for react types
import type { FC } from 'react';

import 'expo-dev-client';

// Imports for Expo and Reac Native libraries
import { Redirect } from 'expo-router';

const Home: FC = (): JSX.Element => {
	// Redirection to the primary screen
	return <Redirect href='/explore' />;
};

export default Home;
