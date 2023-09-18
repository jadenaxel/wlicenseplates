import type { IColor } from "./types";

import { Dimensions } from "react-native";

// Getting dimensions
export const WindowWidth: number = Dimensions.get("window").width;
export const WindowHeight: number = Dimensions.get("window").height;

export const apiUrl: string = "https://fxqapxmx.api.sanity.io/v2021-10-21/data/query/production?query=";

//This code is used to define a set of colors that can be used in other parts of the code.
export const Color: IColor = {
	black: "#000000",
	red: "#FF1464",
	gray: "#D6D6D6",
	white: "#FFFFFF",
};
