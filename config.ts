// This code creates a color interface .
interface IColor {
	[key: string]: string;
}

//This code is used to define a set of colors that can be used in other parts of the code.
export const Color: IColor = {
	black: "#000000",
	red: "#FF1464",
	gray: "#D6D6D6",
	white: "#FFFFFF",
};
