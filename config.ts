import type { IColor } from "./types";

import { Dimensions } from "react-native";

// Getting dimensions
export const WindowWidth: number = Dimensions.get("window").width;
export const WindowHeight: number = Dimensions.get("window").height;

export const paddingHorizontal: number = 16;

//This code is used to define a set of colors that can be used in other parts of the code.
export const Color: IColor = {
	black: "#000000",
	red: "#FF1464",
	gray: "#D6D6D6",
	white: "#FFFFFF",
};
