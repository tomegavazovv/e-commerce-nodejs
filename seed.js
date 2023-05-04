const connectDB = require('./db/connect')
const Product = require('./models/Product')
const mongoose = require('mongoose')

let jsonProducts = require('./mockData/products.json')

const start = async () => {
	try {
		await connectDB(
			'mongodb+srv://root:root@cluster0.y0ndbkc.mongodb.net/e-commerce?retryWrites=true&w=majority'
		)
		await Product.deleteMany()
		jsonProducts = jsonProducts.map((product) => {
			product['user'] = mongoose.Types.ObjectId('643586b6fe2c09a936b12987')
			console.log(product)
			return product
		})
		await Product.create(jsonProducts)
		console.log('Success!')
		process.exit(0)
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

start()
