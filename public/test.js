const fs = require('fs')
const userString = fs.readFileSync('./db/users.json').toString()
const userArray = JSON.parse(userString)
console.log(userArray);