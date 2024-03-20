import type { FC } from 'react';

import Svg, { Path } from 'react-native-svg';

const ArrowLeft: FC<any> = ({ width, height }: any): JSX.Element => {
	return (
		<Svg width={width} height={height} viewBox='0 0 23 24' fill='none'>
			<Path
				d='M6.59227 16L2.90219 12M2.90219 12L6.59227 8M2.90219 12L19.5075 12'
				stroke='white'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</Svg>
	);
};
export default ArrowLeft;
