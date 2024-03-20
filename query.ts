export default {
	query: {
		Home: {
			Continent: {
				query: 'https://fxqapxmx.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22continent%22%5D%7Corder%28title%29%7Btitle%2CplatesNumber%2Cimage%7Basset-%3E%7Burl%7D%7D%2CcountriesQuantity%2Cdescription%2Ccountries%5B0..-1%5D-%3E%7B_id%2Cdescription%2Ctitle%2CplatesNumber%2Cimage%7Basset-%3E%7Burl%7D%7D%2Cflag%7Basset-%3E%7Burl%7D%7D%2Cplates%5B0..-1%5D-%3E%7Btitle%2Cdescription%2Cnote%2Cyear%2CplateType%2Cimage%5B0..1%5D%7Basset-%3E%7Burl%7D%7D%2Cbg%7Basset-%3E%7Burl%7D%7D%2Celigibility%2C_id%2Ccategories%5B0..1%5D-%3E%2Ccountry%7D%2Ccontinent-%3E%7Btitle%7D%7D%7D',
				qroq: `*[_type == "continent"] | order(title) {
                        title,
                        platesNumber,
                        image{
                            asset->{
                                url
                            }
                        },
                        countriesQuantity,
                        description,
                        countries[0..-1]->{
                            _id,
                            description,
                            title,
                            platesNumber,
                            image{
                                asset->{
                                    url
                                }            
                            },
                            flag{
                                asset->{
                                    url
                                }
                            },
                            plates[0..-1]->{
                                title,
                                description,
                                note,
                                year,
                                plateType,
                                image[0..1]{
                                    asset->{
                                    url
                                }
                            },
                            bg{
                                asset->{
                                    url
                                }
                            },
                            eligibility,
                            _id,
                            categories[0..1]->,
                                country 
                            },
                            continent-> {
                                title
                            }
                        }
                        }`,
			},
		},
		Category: {
			query: 'https://fxqapxmx.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22categories%22%5D',
			qroq: `*[_type == "categories"]`,
		},
	},
};
