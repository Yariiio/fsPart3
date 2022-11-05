const mongoose = require('mongoose')

const url = process.env.MONGO_URI

mongoose.connect(url)
	.then(() => {
		console.log('connected to database')
	})
	.catch(error => {
		console.log('error connecting to database', error.message)
	})

const personSchema = mongoose.Schema({
	name: {
		type: String,
		minLength: 3,
		required: true
	},
	number: {
		type: String,
		minLength: 8,
		validate: {
			validator: function(v) {
				return v.split('').includes('-') ? /^\d{2,3}-\d+$/.test(v) : /\d+/.test(v)
			},
			message: props => `${props.value} is not a valid phone number!`
		},
		required: [true, 'User phone number required']
	}
})

personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

module.exports = mongoose.model('Person', personSchema)