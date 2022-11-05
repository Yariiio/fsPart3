const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide  the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://JariS:${password}@cluster0.wy4m45b.mongodb.net/phonebook?retryWrites=true&w=majority`


const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

mongoose.connect(url)
.then((result) => {
    console.log('connected')

    if(process.argv.length > 3) {
        const name = process.argv[3]
        const number = process.argv[4]

        const person = new Person({
            name: name, 
            number: number
        })
        console.log(`added ${person.name} ${person.number} to phonebook`)
        person.save()
        mongoose.connection.close() 
    }
    else {
        Person.find({})
        .then(result => {
            console.log('phonebook')
            result.forEach(person => {
                console.log(`${person.name} ${person.number}`)
            })
            mongoose.connection.close()
        })
    }
})



    

