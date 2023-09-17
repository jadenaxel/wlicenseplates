import type { IColor } from "./types";

import { Dimensions } from "react-native";

// Getting dimensions
const WindowWidth: number = Dimensions.get("window").width;
const WindowHeight: number = Dimensions.get("window").height;

//This code is used to define a set of colors that can be used in other parts of the code.
export const Color: IColor = {
	black: "#000000",
	red: "#FF1464",
	gray: "#D6D6D6",
	white: "#FFFFFF",
};

// Exporting dimensions
export { WindowHeight, WindowWidth };
