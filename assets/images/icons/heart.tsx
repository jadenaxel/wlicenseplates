import type { FC } from "react";

import Svg, { Path } from "react-native-svg";

const Heart: FC<any> = ({ color, fill }: any): JSX.Element => {
	return (
		<Svg width="21" height="18" viewBox="0 0 21 18" fill={fill} strokeWidth={2}>
			<Path
				d="M2.69302 2.31802C0.93566 4.07538 0.93566 6.92462 2.69302 8.68198L10.3751 16.364L18.057 8.68198C19.8143 6.92462 19.8143 4.07538 18.057 2.31802C16.2996 0.56066 13.4504 0.56066 11.693 2.31802L10.3751 3.63609L9.05698 2.31802C7.29962 0.56066 4.45038 0.56066 2.69302 2.31802Z"
				stroke={color}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default Heart;
