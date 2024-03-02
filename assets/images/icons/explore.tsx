import type { FC } from "react";

import Svg, { Path } from "react-native-svg";

const Explore: FC<any> = ({ color }: any): JSX.Element => {
	return (
		<Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
			<Path
				d="M1.17993 9H3.125C4.22957 9 5.125 9.89543 5.125 11V12C5.125 13.1046 6.02043 14 7.125 14C8.22957 14 9.125 14.8954 9.125 16V18.9451M6.125 1.93552V3.5C6.125 4.88071 7.24429 6 8.625 6H9.125C10.2296 6 11.125 6.89543 11.125 8C11.125 9.10457 12.0204 10 13.125 10C14.2296 10 15.125 9.10457 15.125 8C15.125 6.89543 16.0204 6 17.125 6L18.1895 6M13.125 18.4879V16C13.125 14.8954 14.0204 14 15.125 14H18.1895M19.125 10C19.125 14.9706 15.0956 19 10.125 19C5.15444 19 1.125 14.9706 1.125 10C1.125 5.02944 5.15444 1 10.125 1C15.0956 1 19.125 5.02944 19.125 10Z"
				stroke={color}
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};
export default Explore;
