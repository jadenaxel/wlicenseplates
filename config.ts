import type { IColor } from "./types";

import { Dimensions } from "react-native";

import Africa from "@/assets/images/contient/Africa.svg";
import America from "@/assets/images/contient/America.svg";
import Asia from "@/assets/images/contient/Asia.svg";
import Europe from "@/assets/images/contient/Europe.svg";
import Australia from "@/assets/images/contient/Oceans.svg";

export const elements: any = { Africa, America, Asia, Europe, Australia };

// Getting dimensions
export const WindowWidth: number = Dimensions.get("window").width;
export const WindowHeight: number = Dimensions.get("window").height;

export const paddingHorizontal: number = 16;

export const filters: string[] = ["All", "Private/Passenger", "United Nations", "Media", "Notes"];

//This code is used to define a set of colors that can be used in other parts of the code.
export const Color: IColor = {
	black: "#000000",
	red: "#FF1464",
	gray: "#D6D6D6",
	white: "#FFFFFF",
};
