const fs=require('fs');

// writefile    1.
fs.writeFileSync('./demo.txt', 'Welcome To Creative')

// contente add in file     2.
fs.appendFileSync('./demo.txt','thank you for joying us')



// method 1 readfile
// const data=fs.readFileSync('./demo.txt')
// const new_data=data.toString()
// console.log(new_data)

// method 2
// const data=fs.readFileSync('./demo.txt','utf-8')
// console.log(data)



// deletefile and content
// fs.unlinkSync('./demo.txt')



// renamefile
// fs.renameSync('./demo.txt','test.txt')

// console.log('hello')
// const data=fs.readFileSync('./test.txt','utf-8')
// console.log(data);
// console.log('good');




// method for asynchronous
// console.log("Hello")
// fs.readFile('./demo.txt', 'utf-8', (err, data) => {
//     console.log(data);
// })
// console.log("Hello 2")

