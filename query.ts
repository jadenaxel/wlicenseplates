export default {
	query: {
		Home: {
			Continent: {
				query: "https://fxqapxmx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22continent%22%5D+%7C+order%28title%29+%7B%0Atitle%2C%0AplatesNumber%2C%0Aimage%2C%0AcountriesQuantity%2C%0Adescription%2C%0Aicons%2C%0Acountries%5B0..-1%5D-%3E+%7B%0Adescription%2C%0Atitle%2C%0AplatesNumber%2C%0Aimage%2C%0Aflag%2C%0Aplates%5B0..-1%5D-%3E%2C%0Acontinent-%3E+%7B%0Atitle%0A%7D%0A%7D%0A%7D&perspective=published",
				qroq: `*[_type == "continent"] | order(title) {
                    title,
                    platesNumber,
                    image,
                    countriesQuantity,
                    description,
                    icons,
                    countries[0..-1]-> {
                        description,
                        title,
                        platesNumber,
                        image,
                        flag,
                        plates[0..-1]->,
                        continent-> {
                            title
                        }
                    }
                }`,
			},
		},
		Search: {
			Country: {
				query: "https://fxqapxmx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22plates%22%5D%7B%0Acountry-%3E%7Btitle%7D%2C%0Anote%2C%0AplateType%2C%0Atitle%2C%0Aeligibility%2C%0Ayear%2C%0Adescription%2C%0Abg%2C%0Aimage%0A%7D&perspective=published",
				qroq: `*[_type == "plates"]{
                        country->{title},
                        note,
                        plateType,
                        title,
                        eligibility,
                        year,
                        description,
                        bg,
                        image
                    }`,
			},
		},
	},
};
