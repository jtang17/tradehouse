const elastic = require("../models/elasticSearch.js");

elastic.indices.create(
	{
		index: "bgm_products",
		body: {
			index: {
				number_of_shards: 6,
				number_of_replicas: 1
			},
			mappings: {
				product: {
					properties: {
						id: {
							type: "integer"
						},
						title: {
							type: "text"
						},
						description: {
							type: "text"
						},
						quantity: {
							type: "float"
						},
						price: {
							type: "float"
						},
						imageUrl: {
							type: "text"
						},
						merchantId: {
							type: "integer"
						},
						createdAt: {
							type: "date"
						},
						updatedAt: {
							type: "date"
						}
					}
				}
			}
		}
	},
	(err, res, status) => {
		if (err) {
			console.log(err);
		} else {
			console.log("created", res);
		}
	}
);

elastic.indices.create({
	index: 'bgm_streams',
	body: {
		index: {
			number_of_shards: 4,
			number_of_replicas: 1
		},
		mappings: {
			stream: {
				properties: {
					id: {
						type: "integer"
					},
					url: {
						type: "text"
					},
					currentProduct: {
						type: "integer"
					},
					broadcastMessage: {
						type: "text"
					},
					live: {
						type: "boolean"
					},
					merchantId: {
						type: "integer"
					},
					createdAt: {
						type: "date"
					},
					updatedAt: {
						type: "date"
					}
				}
			}
		}
	}
}, (err, res, status) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log("created", res);
	}
});

elastic.indices.create({
	index: 'bgm_merchants',
	body: {
		index: {
			number_of_shards: 4,
			number_of_replicas: 1
		},
		mappings: {
			merchant: {
				properties: {
					id: {
						type: "integer"
					},
					username: {
						type: "text"
					},
					website: {
						type: "text"
					},
					logo: {
						type: "text"
					},
					rating: {
						type: "integer"
					},
					location: {
						type: "text"
					},
					email: {
						type: "keyword"
					},
					facebook: {
						type: "text"
					},
					twitter: {
						type: "text"
					},
					description: {
						type: "text"
					},
					currentProduct: {
						type: "integer"
					},
					storeName: {
						type: "text"
					},
					sub: {
						type: "text"
					},
					createdAt: {
						type: "date"
					},
					updatedAt: {
						type: "date"
					}
				}
			}
		}
	}
}, (err, res, status) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log("created", res);
	}
});
