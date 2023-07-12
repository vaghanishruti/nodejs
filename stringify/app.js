const fs = require('fs')

const data = [
    {name: "test", age: 28},
    {name: "test", age: 28},
    {name: "test", age: 28},
]

fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8')