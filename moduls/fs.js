const fs = require('fs')
const path = require('path')
// fs.mkdir(path.join(__dirname, 'test'), (err) =>{

//     console.log('Create file');
// })

const filePath = path.join(__dirname, 'test', 'text.txt')
// fs.writeFile(filePath, 'Muzaffars nodeJs', err =>{
//     if (err) {
//         throw err
//     }

//     console.log('text written');

//     fs.appendFile(filePath, "\nMuzaffar2 nodejs ", err =>{
//         if (err) {
//             throw err
//         }
//         console.log('asaasd');
//     })
// })
fs.readFile(filePath, "utf-8", (err,content) =>{
    const data = Buffer.from(content)
    console.log('Content', content);
})
// const http = require('http')
// const fs = require('fs');
// const path = require('path');
// // const text = require('./data')
// // console.log(text);
//  const server = http.createServer((req, res)=> {
//     if (req.url === '/'){
//         fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) =>{
//             if (err) {
//                 throw err
//             }
//             res.writeHead(200, {
//                 'Content-Type': 'text/html'
//             })
//             res.end(data)
//         })
//     }else if (req.url === '/contact'){
//         fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) =>{
//             if (err) {
//                 throw err
//             }
//             res.writeHead(200, {
//                 'Content-Type': 'text/html'
//             })
//             res.end(data)
//         })
//     }




//     // res.end('<h1>hello world</h1>')
//     // Request Zapros 
//     //response Server bizaga javob berishiga xizmat qiladi 
// })
// server.listen(3000, ()=>{
//     console.log("server has been started");
// })
// //** Moduls*/
// //1.OS
// //2.fs = file system
// //3.path
// //4.events
// //5.https request

const path = require('path');

// ========  FILE SYSTEM ========= //


// fs.mkdir(path.join(__dirname, 'modull'), (err) =>{
//     if (err) throw err;

// console.log("Folder was created successfully");
// fs.writeFile(path.join(__dirname, 'modull', 'path.js'), "//path module", (err) =>{
//     if (err) throw err; 
//     console.log('File was created successfully');
// })
// })

fs.writeFile(
    path.join(__dirname, "modull", "node.txt"),
    "NodeJS practise",
    (err) => {
        if (err) throw err
        console.log("Document has been created");

        fs.appendFile(
            path.join(__dirname, "modull", "node.txt"),
            " by Muzaffar",
            (err) => {
                if (err) throw err;
                console.log("Document has been changed");

                fs.readFile(
                    path.join(__dirname, "modull", "node.txt"),
                    "utf-8",
                    (err, data) => {
                        if (err) throw err;
                        console.log(data);
                    }
                )
                fs.appendFile(
                    path.join(__dirname, "modull", "node.txt"),
                    " Muzaffar mening ismim",
                    (err)=>{
                        if (err) throw err;
                        console.log("Xato barmi??");
                    }
                )
            }
        )

    }
)


