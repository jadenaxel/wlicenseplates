import type { FC } from 'react';

import Svg, { Path } from 'react-native-svg';

const DOT: FC<any> = ({ width, height }: any): JSX.Element => {
	return (
		<Svg width={width} height={height} viewBox='0 0 12 13' fill='none'>
			<Path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M6.00574 10.3874C8.21488 10.3874 10.0057 8.59651 10.0057 6.38737C10.0057 4.17824 8.21488 2.38737 6.00574 2.38737C3.7966 2.38737 2.00574 4.17824 2.00574 6.38737C2.00574 8.59651 3.7966 10.3874 6.00574 10.3874ZM6.00574 9.38737C4.34888 9.38737 3.00574 8.04423 3.00574 6.38737C3.00574 4.73052 4.34888 3.38737 6.00574 3.38737C7.66259 3.38737 9.00574 4.73052 9.00574 6.38737C9.00574 8.04423 7.66259 9.38737 6.00574 9.38737Z'
				fill='#FF1464'
			/>
		</Svg>
	);
};

export default DOT;
