import type { FC } from "react";

import { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Color, WindowHeight, WindowWidth } from "../config";

const Linear: Animated.AnimatedComponent<typeof LinearGradient> = Animated.createAnimatedComponent(LinearGradient);

const Loading: FC = (): JSX.Element => {
	const pulseAnim: Animated.Value = useRef(new Animated.Value(0)).current;
	const width: number = WindowWidth - 20;

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(pulseAnim, {
					useNativeDriver: true,
					toValue: 1,
					duration: 2000,
					easing: Easing.out(Easing.ease),
				}),
				Animated.timing(pulseAnim, {
					useNativeDriver: true,
					duration: 2000,
					toValue: 0,
					easing: Easing.in(Easing.ease),
				}),
			])
		).start();

		return () => {
			pulseAnim.stopAnimation();
		};
	}, []);

	const translateX: Animated.AnimatedInterpolation<string | number> = pulseAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, width - 19],
		extrapolate: "clamp",
	});

	return (
		<View style={styles.main}>
			{Array.from({ length: 5 }).map((item: any, i: number) => {
				return (
					<Animated.View style={[styles.card]} key={i}>
						<Linear
							start={{ x: 1, y: 8 }}
							end={{ x: 3, y: 1 }}
							colors={["rgba(0,0,0,1)", "rgba(255,255,255,1)"]}
							style={[
								styles.cardd,
								{
									transform: [
										{
											translateX: translateX,
										},
									],
								},
							]}
						></Linear>
					</Animated.View>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		backgroundColor: Color.black,
	},
	card: {
		height: WindowHeight / 10,
		backgroundColor: Color.gray,
		borderRadius: 4,
		marginBottom: 15,
		overflow: "hidden",
	},
	cardd: {
		width: 90,
		height: WindowHeight / 10,
		backgroundColor: Color.white,
		opacity: 0.3,
		borderRadius: 4,
	},
});

export default Loading;
