
const fs = require("fs");


//  uptade fil 
//  ! fs.appendfile (filename , content, callback)
 
  
fs.appendFile("demo.js", "node" ,(error) =>{
    if(error) return console.log(error);
    console.log("demo file update ");
    
    
})



/**
 *  DELETE FILE 
 * fs.unlinkfile ("filename ", callback)
 * 
 
 

 fs.unlink("demo.js",(err) =>{
    if(err) return console.log(err)
        console.log("removed file ");
        
 })
 




//   fs.mkdir ("src/A/B/C",{recursive: true},(err)=>{
//     if(err) return console.log(err);
//     console.log("folder created ");
    
//   })



//    fs.rename("src/A", "src/X", (err) => {
//   if (err) console.log(err);
//   else console.log("Folder renamed");
// });



// fs.rename("src/B", "src/Y", , (err) =>{
//     if (err) console.log(err);
//     console.log("floder updated ");
    
    
})/**
 * 
 */
