import { Color } from "@/config";
import type { FC } from "react";

import { View, StyleSheet, ActivityIndicator } from "react-native";

const LoadingActivity: FC = (): JSX.Element => {
	return (
		<View style={styles.main}>
			<ActivityIndicator color={Color.red} size={30} />
		</View>
	);
};
const styles = StyleSheet.create({
	main: { flex: 1, backgroundColor: Color.black, justifyContent: "center", alignItems: "center" },
});

export default LoadingActivity;
