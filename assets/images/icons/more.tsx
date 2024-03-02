import type { FC } from "react";

import Svg, { Path } from "react-native-svg";

const More: FC<any> = ({ color }: any): JSX.Element => {
	return (
		<Svg width="19" height="20" viewBox="0 0 19 20" fill="none">
			<Path
				d="M15.5319 16.6568C12.4077 19.781 7.34234 19.781 4.21815 16.6568C2.65605 15.0947 1.875 13.0474 1.875 11C1.875 8.95262 2.65605 6.90523 4.21815 5.34313C4.21815 5.34313 4.87504 6.99995 6.87504 7.99995C6.87504 5.99995 7.37504 2.99996 9.86088 1C11.875 3 13.9662 3.77745 15.5319 5.34313C17.094 6.90523 17.875 8.95262 17.875 11C17.875 13.0474 17.0939 15.0947 15.5319 16.6568Z"
				stroke={color}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M7.75368 14.1213C8.92525 15.2928 10.8247 15.2928 11.9963 14.1213C12.5821 13.5355 12.875 12.7677 12.875 12C12.875 11.2322 12.5821 10.4644 11.9963 9.87863C11.4142 9.29655 10.6525 9.00367 9.88956 8.99999L8.87495 11.9999L6.875 12C6.87501 12.7677 7.1679 13.5355 7.75368 14.1213Z"
				stroke={color}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default More;
