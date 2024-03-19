import type { FC } from 'react';

import Svg, { Path } from 'react-native-svg';

const ArrowChvronRight: FC<any> = ({ width, height }: any): JSX.Element => {
	return (
		<Svg width={width} height={height} viewBox='0 0 14 14' fill='none'>
			<Path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M7.50172 0.292893C7.1112 -0.0976311 6.47803 -0.0976311 6.08751 0.292893C5.69699 0.683417 5.69699 1.31658 6.08751 1.70711L9.92207 5.54167H1.25293C0.700645 5.54167 0.25293 5.98938 0.25293 6.54167C0.25293 7.09395 0.700645 7.54167 1.25293 7.54167H9.92207L6.08751 11.3762C5.69699 11.7668 5.69699 12.3999 6.08751 12.7904C6.47803 13.181 7.1112 13.181 7.50172 12.7904L13.0434 7.24877C13.1454 7.14679 13.2207 7.02826 13.2694 6.90182C13.3055 6.80843 13.328 6.70826 13.3344 6.60375C13.3369 6.56241 13.3369 6.52093 13.3344 6.47958C13.328 6.37507 13.3055 6.2749 13.2694 6.18151C13.2207 6.05507 13.1454 5.93654 13.0434 5.83456L7.50172 0.292893Z'
				fill='white'
			/>
		</Svg>
	);
};

export default ArrowChvronRight;
