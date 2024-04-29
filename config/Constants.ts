import { Africa, America, Asia, Australia, Europe } from '@/assets/images/contient';

export default {
	elements: { Africa, America, Asia, Australia, Europe },
	DataFilterSorted: (data: any, ALL: string) => {
		const FilterAllTitle = data.filter((item: any) => item.title === ALL);
		const FilterOtherTitle = data.filter((item: any) => item.title !== ALL);

		return [...FilterAllTitle, ...FilterOtherTitle];
	},

	filterPlates: (plates: any, filter: any, ALL: string) => {
		if (filter === ALL) return plates;
		return plates.filter((plate: any) => plate.categories.some((cat: any) => cat.title === filter));
	},
};
