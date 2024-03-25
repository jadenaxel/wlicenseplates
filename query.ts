export default {
	query: {
		Home: {
			Continent: {
				query: 'https://fxqapxmx.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22continent%22%5D+%7C+order%28title%29+%7B%0A++++++++++++++++++++++++title%2C%0A++++++++++++++++++++++++platesNumber%2C%0A++++++++++++++++++++++++image%7B%0A++++++++++++++++++++++++++++asset-%3E%7B%0A++++++++++++++++++++++++++++++++url%2C%0A+++++++++++++++++++++++++++++++metadata%7B%0A++++++++++++++++++++++++++++++++palette%0A+++++++++++++++++++++++++++++++%7D%0A++++++++++++++++++++++++++++%7D%0A++++++++++++++++++++++++%7D%2C%0A++++++++++++++++++++++++countriesQuantity%2C%0A++++++++++++++++++++++++description%2C%0A++++++++++++++++++++++++countries%5B0..-1%5D-%3E%7B%0A++++++++++++++++++++++++++++_id%2C%0A++++++++++++++++++++++++++++description%2C%0A++++++++++++++++++++++++++++title%2C%0A++++++++++++++++++++++++++++platesNumber%2C%0A++++++++++++++++++++++++++++image%7B%0A++++++++++++++++++++++++++++++++asset-%3E+%7B%0A++++++++++++++++++++++++++++++++++url%0A++++++++++++++++++++++++++++++++%7D++++++++++%0A++++++++++++++++++++++++++++%7D%2C%0A++++++++++++++++++++++++++++flag%7B%0A++++++++++++++++++++++++++++++++asset-%3E%7B%0A++++++++++++++++++++++++++++++++++++url%0A++++++++++++++++++++++++++++++++%7D%0A++++++++++++++++++++++++++++%7D%2C%0A++++++++++++++++++++++++++++plates%5B0..-1%5D-%3E%7B%0A++++++++++++++++++++++++++++++++title%2C%0A++++++++++++++++++++++++++++++++description%2C%0A++++++++++++++++++++++++++++++++note%2C%0A++++++++++++++++++++++++++++++++year%2C%0A++++++++++++++++++++++++++++++++plateType%2C%0A++++++++++++++++++++++++++++++++image%5B0..1%5D%7B%0A++++++++++++++++++++++++++++++++++++asset-%3E%7B%0A++++++++++++++++++++++++++++++++++++url%0A++++++++++++++++++++++++++++++++%7D%0A++++++++++++++++++++++++++++%7D%2C%0A++++++++++++++++++++++++++++bg%7B%0A++++++++++++++++++++++++++++++++asset-%3E%7B%0A++++++++++++++++++++++++++++++++++++url%0A++++++++++++++++++++++++++++++++%7D%0A++++++++++++++++++++++++++++%7D%2C%0A++++++++++++++++++++++++++++eligibility%2C%0A++++++++++++++++++++++++++++_id%2C%0A++++++++++++++++++++++++++++categories%5B0..1%5D-%3E%2C%0A++++++++++++++++++++++++++++++++country+%0A++++++++++++++++++++++++++++%7D%2C%0A++++++++++++++++++++++++++++continent-%3E+%7B%0A++++++++++++++++++++++++++++++++title%0A++++++++++++++++++++++++++++%7D%0A++++++++++++++++++++++++%7D%0A++++++++++++++++++++++++%7D',
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
