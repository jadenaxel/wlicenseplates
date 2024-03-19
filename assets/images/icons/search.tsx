import type { FC } from 'react';

import Svg, { Path } from 'react-native-svg';

const Search: FC<any> = ({ color, width, height }: any): JSX.Element => {
	return (
		<Svg width={width} height={height} viewBox='0 0 21 20' fill='none'>
			<Path
				d='M19.625 19L13.625 13M15.625 8C15.625 11.866 12.491 15 8.625 15C4.75901 15 1.625 11.866 1.625 8C1.625 4.13401 4.75901 1 8.625 1C12.491 1 15.625 4.13401 15.625 8Z'
				stroke={color}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</Svg>
	);
};

export default Search;
