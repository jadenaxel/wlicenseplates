// Imports for react types
import type { FC } from 'react';

import { useContext } from 'react';

// import 'expo-dev-client';

// Imports for Expo and Reac Native libraries
import { Redirect } from 'expo-router';

import { LoadingActivity, useFecth } from '@/components';
import { Actions, Context } from '@/Wrapper';
import Query from '@/config/Query';

const Home: FC = (): JSX.Element => {
	const { dispatch }: any = useContext(Context);
	const { isLoading } = useFecth({ uri: Query.query.Home.Continent.query, dispatch, dispatchType: Actions.All });

	if (isLoading) return <LoadingActivity />;

	// Redirection to the primary screen
	return <Redirect href='/explore' />;
};

export default Home;
