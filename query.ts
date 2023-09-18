export default {
	continent: {
		getContinent:
			"*%5B_type+%3D%3D+%22continent%22%5D+%7C+order%28title%29+%7B%0A++title%2C%0A++platesNumber%2C%0A++image%2C%0A++countriesQuantity%2C%0A++description%2C%0A++icons%2C%0A++countries%5B0..-1%5D-%3E%7B%0A++++description%2C%0A++++title%2C%0A++++platesNumber%2C%0A++++image%2C%0A++++flag%2C%0A++++plates%5B0..-1%5D-%3E%0A++%7D%0A%7D%0A%0A%0A%0A&perspective=published",
		data: `*[_type == "continent"] | order(title) {
                    title,
                    platesNumber,
                    image,
                    countriesQuantity,
                    description,
                    icons,
                    countries[0..-1]->{
                        description,
                        title,
                        platesNumber,
                        image,
                        flag,
                        plates[0..-1]->
                    }
                }`,
	},
};
