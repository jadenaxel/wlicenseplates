export default {
	query: {
		Home: {
			Continent: {
				query: "https://fxqapxmx.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22continent%22%5D+%7C+order%28title%29+%7Btitle%2CplatesNumber%2Cimage%2CcountriesQuantity%2Cdescription%2Ccountries%5B0..-1%5D-%3E%7B_id%2Cdescription%2Ctitle%2CplatesNumber%2Cimage%2Cflag%2Cplates%5B0..-1%5D-%3E%7Btitle%2Cdescription%2Cnote%2Cyear%2CplateType%2Cimage%2Cbg%2Celigibility%2C_id%2Ccategories%5B0..1%5D-%3E%2Ccountry%7D%7D%2Ccontinent-%3E%7Btitle%7D%7D",
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
                        plates[0..-1]->{
                            title,
                            description,
                            note,
                            year,
                            plateType,
                            image,
                            bg,
                            eligibility,
                            _id,
                            categories[0..1]->,
                            country 
                        } 
                    },
                    continent-> {
                        title
                    }
            }`,
			},
		},
		Category: {
			query: "https://fxqapxmx.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22categories%22%5D",
			qroq: `*[_type == "categories"]`,
		},
	},
};
