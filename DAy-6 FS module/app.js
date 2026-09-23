

const console = require("console");
const fs = require("fs");


// ! ! create file 



//  Fs. writefilesync ("filename.ext","content")



// fs.writeFileSync("demo.txt",  " ya toh win hain ya toh lern hain")
// console.log("file created ");


// fs.writeFileSync("src/script.js", "console.log('hello developers')")



/**
 * !  2) read file
 * fs.readFilesync(filename.ext","content")
  
 */
 
//   const fileData =fs.readFileSync("demo.txt" , "utf8")
//   console.log(fileData) // buffer 


//    const filesc = fs.readFileSync("src/Script.js", "utf-8")
//    console.log(filesc);
   



//**
// !  3
// update file fs.appendfileync  ()
//  */
// fs.appendFileSync("src/script.js", "\nconsole.log('Samajh rhe ho 👉');");


//  fs.writeFileSync("demo.txt","Doraemon\n")
//   fs.appendFileSync("demo.txt","nobita\n")
//    fs.appendFileSync("demo.txt","shizuka\n")
//     fs.appendFileSync("demo.txt","sunio\n")



 // !  4 delete file 

// fs.writeFileSync("delete.txt","delete kr du")
// console.log("file created")

//  fs.unlinkSync("delete.txt")
//  console.log("deleted file")



//  ! 5 renamefile 

// fs.renameSync("demo.txt", ("first.txt"))
// console.log("rename completed file")


// fs.renameSync("src/script.js","src/index.js")


// ! 6  copy file 

 
// fs.mkdirSync("dist")

fs.copyFileSync("src/index.js" ,"dist/main.js")


