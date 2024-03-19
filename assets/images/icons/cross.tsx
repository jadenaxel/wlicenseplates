import type { FC } from 'react';

import Svg, { Path } from 'react-native-svg';

const Cross: FC<any> = ({ width, height }: any): JSX.Element => {
	return (
		<Svg width={width} height={height} viewBox='0 0 23 24' fill='none'>
			<Path d='M6.39459 18L17.4648 6M6.39459 6L17.4648 18' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
		</Svg>
	);
};

export default Cross;
