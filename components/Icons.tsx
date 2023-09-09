import Svg, { Path } from "react-native-svg";

const FireIcon = ({ color, size }: { color: string; size: number }): JSX.Element => {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.5} stroke={color}>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
			/>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
			/>
		</Svg>
	);
};

const HeartIcon = ({ color, size }: { color: string; size: number }): JSX.Element => {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.5} stroke={color}>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
			/>
		</Svg>
	);
};

const Explore = ({ color, size }: { color: string; size: number }): JSX.Element => {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.5} stroke={color}>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
			/>
		</Svg>
	);
};

const SearchIcon = ({ color, size }: { color: string; size: number }): JSX.Element => {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.5} stroke={color}>
			<Path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
		</Svg>
	);
};

export default { FireIcon, HeartIcon, Explore, SearchIcon };
