// Imports for react types
import type { FC } from "react";

// Imports for Expo and Reac Native libraries
import { Redirect } from "expo-router";

const Home: FC = (): JSX.Element => {
	return <Redirect href="/explore" />;
};

export default Home;
