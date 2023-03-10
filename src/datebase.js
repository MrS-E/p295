//This code was copied from https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
const mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'bibliothek';      // REPLACE WITH YOUR DB NAME

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error: ', err)
            })
    }
}

module.exports = new Database()