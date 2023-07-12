// const http = require('http')                            //get to http and fs
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const jsondata = fs.readFileSync('text.json', 'utf-8')
//     const data = JSON.parse(jsondata)

//     const homepage = fs.readFileSync('text.html', 'utf-8').replace('<%%NAME%%>', data[0].name)
//     .replace('<%%LASTNAME%%>', data[0].lastname).replace('<%%MIDDLENAME%%>', data[0].middlename)
//     res.write(homepage)
//     res.end()
// })
// server.listen(3000)



const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const jsondata = fs.readFileSync('text.json', 'utf-8')
    const data = JSON.parse(jsondata)

    for (i=0;i<data.length;i++) {
        const homepage = fs.readFileSync('text.html', 'utf-8').replace('<$$FNAME$$>', data[i].name.firstname)
        .replace('<$$LNAME$$>', data[i].name.lastname).replace('<$$PERMENENT$$>', data[i].address.permenent)
        .replace('<$$RESIDENTIAL$$>', data[i].address.residential).replace('<$$OFFICE$$>', data[i].mobileno.office)
        .replace('<$$TELNO$$>', data[i].mobileno.telphoneno)
        res.write(homepage)
    }
    res.end()
})
server.listen(3000)