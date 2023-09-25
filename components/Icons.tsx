import Svg, { Path, G } from "react-native-svg";

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

const ArrowRight = ({ size }: { size: number }): JSX.Element => {
	return (
		<Svg width={size} height={size} viewBox="0 0 14 14">
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M7.46333 0.292893C7.07281 -0.0976311 6.43964 -0.0976311 6.04912 0.292893C5.65859 0.683418 5.65859 1.31658 6.04912 1.70711L9.88368 5.54167H1.21454C0.662254 5.54167 0.214539 5.98938 0.214539 6.54167C0.214539 7.09395 0.662254 7.54167 1.21454 7.54167H9.88368L6.04912 11.3762C5.65859 11.7668 5.65859 12.3999 6.04912 12.7904C6.43964 13.181 7.07281 13.181 7.46333 12.7904L13.005 7.24877C13.107 7.14679 13.1823 7.02826 13.2311 6.90182C13.2671 6.80843 13.2896 6.70826 13.296 6.60375C13.2985 6.56241 13.2985 6.52093 13.296 6.47958C13.2896 6.37507 13.2671 6.2749 13.2311 6.18151C13.1823 6.05507 13.107 5.93654 13.005 5.83456L7.46333 0.292893Z"
				fill="white"
			/>
		</Svg>
	);
};

const ArrowLongLeft = ({ size, color }: { size: number; color: string }): JSX.Element => {
	return (
		<Svg width={size} height={size} viewBox="0 0 20 10" fill={color}>
			<Path
				d="M5.59227 9L1.90219 5M1.90219 5L5.59227 1M1.90219 5L18.5075 5"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

const FilterIcon = ({ size }: { size: number }): JSX.Element => {
	return (
		<Svg width={size} height={size} viewBox="0 0 18 12" fill="none">
			<Path
				d="M10.6841 10C11.0983 10 11.4341 10.3358 11.4341 10.75C11.4341 11.1642 11.0983 11.5 10.6841 11.5H7.68408C7.26987 11.5 6.93408 11.1642 6.93408 10.75C6.93408 10.3358 7.26987 10 7.68408 10H10.6841ZM13.6841 5C14.0983 5 14.4341 5.33579 14.4341 5.75C14.4341 6.16421 14.0983 6.5 13.6841 6.5H4.68408C4.26987 6.5 3.93408 6.16421 3.93408 5.75C3.93408 5.33579 4.26987 5 4.68408 5H13.6841ZM16.6841 0C17.0983 0 17.4341 0.335786 17.4341 0.75C17.4341 1.16421 17.0983 1.5 16.6841 1.5H1.68408C1.26987 1.5 0.934082 1.16421 0.934082 0.75C0.934082 0.335786 1.26987 0 1.68408 0H16.6841Z"
				fill="#D6D6D6"
			/>
		</Svg>
	);
};

const Favorite = ({ size, color, stroke }: { size: number; color: string; stroke: string }): JSX.Element => {
	return (
		<Svg width={size} height={size} viewBox="0 0 20 18" fill={color}>
			<Path
				d="M3.16756 2.31802C1.54636 4.07538 1.54636 6.92462 3.16756 8.68198L10.2544 16.364L17.3411 8.68198C18.9623 6.92462 18.9623 4.07538 17.3411 2.31802C15.7199 0.56066 13.0914 0.56066 11.4702 2.31802L10.2544 3.63609L9.03843 2.31802C7.41724 0.56066 4.78876 0.56066 3.16756 2.31802Z"
				stroke={stroke}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

const X = ({ size }: { size: number }): JSX.Element => {
	return (
		<Svg width={size} height={size} viewBox="0 0 23 24">
			<Path d="M6.39459 18L17.4648 6M6.39459 6L17.4648 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</Svg>
	);
};

const Circle = ({ size }: { size: number }): JSX.Element => {
	return (
		<Svg width={size} height={size} viewBox="0 0 13 13" fill="none">
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.00574 10.3874C8.21488 10.3874 10.0057 8.59651 10.0057 6.38737C10.0057 4.17824 8.21488 2.38737 6.00574 2.38737C3.7966 2.38737 2.00574 4.17824 2.00574 6.38737C2.00574 8.59651 3.7966 10.3874 6.00574 10.3874ZM6.00574 9.38737C4.34888 9.38737 3.00574 8.04423 3.00574 6.38737C3.00574 4.73052 4.34888 3.38737 6.00574 3.38737C7.66259 3.38737 9.00574 4.73052 9.00574 6.38737C9.00574 8.04423 7.66259 9.38737 6.00574 9.38737Z"
				fill="#FF1464"
			/>
		</Svg>
	);
};

export default { FireIcon, HeartIcon, Explore, SearchIcon, ArrowRight, ArrowLongLeft, FilterIcon, Favorite, X, Circle };
