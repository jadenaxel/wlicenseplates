import type { FC } from "react";

import { createContext, useReducer } from "react";

const initialValue: any = {
	Data: "",
	ContinentData: "",
	CountryData: "",
	PlatesData: "",
};

export const Actions: any = {
	All: "All",
	Continent: "Contient",
	Country: "Country",
	Plates: "Plates",
};

const reducer = (state: any, action: any): any => {
	switch (action.type) {
		case Actions.All:
			return { ...state, Data: action.payload };
		case Actions.Continent:
			return { ...state, ContinentData: action.payload };
		case Actions.Country:
			return { ...state, CountryData: action.payload };
		case Actions.Plates:
			const { item, country } = action.payload;
			return { ...state, PlatesData: { ...item, country } };
		default:
			return state;
	}
};

export const Context: any = createContext({});

const Wrapper: FC<any> = ({ children }: any): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialValue);

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default Wrapper;
