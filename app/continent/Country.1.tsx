import type { FC } from "react";
import type { EdgeInsets } from "react-native-safe-area-context";
import { View, Text, ScrollView, ImageBackground, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Color } from "../../config";
import { Icons } from "../../components";
import { styles } from "./country";

export const Country: FC = (): JSX.Element => {
	const safeAreaInsets: EdgeInsets = useSafeAreaInsets();

	const containerStyle: any = {
		flex: 1,
		backgroundColor: Color.black,
		paddingTop: safeAreaInsets.top,

		paddingLeft: safeAreaInsets.left,
		paddingRight: safeAreaInsets.right,
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={containerStyle}>
			<ImageBackground source={{ uri: image }} style={styles.header} resizeMode="cover">
				<Pressable onPress={() => router.back()}>
					<Icons.ArrowLongLeft size={24} color={Color.white} />
				</Pressable>
				<View style={styles.continent}>
					<Image style={styles.contientIcon} source={{ uri: icons }} />
					<Text style={styles.continentText}>{title}</Text>
				</View>
			</ImageBackground>
		</ScrollView>
	);
};
