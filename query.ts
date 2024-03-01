export default {
	query: {
		Home: {
			Continent: {
				query: "https://fxqapxmx.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22continent%22%5D+%7C+order%28title%29+%7Btitle%2CplatesNumber%2Cimage%2CcountriesQuantity%2Cdescription%2Ccountries%5B0..-1%5D-%3E+%7B_id%2Cdescription%2Ctitle%2CplatesNumber%2Cimage%2Cflag%2Cplates%5B0..-1%5D-%3E%2Ccontinent-%3E%7Btitle%7D%7D%7D",
				qroq: `*[_type == "continent"] | order(title) {
                    title,
                    platesNumber,
                    image,
                    countriesQuantity,
                    description,
                    countries[0..-1]-> {
                        _id,
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
