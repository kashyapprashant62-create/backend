  const path = require('path')

//   const  reslove = path.slove ("xyz.txt")
//   console.log(reslove);
  
   
//  const parseOutput = path.parse (__filename)
//  console.log(parseOutput);


//  const reslovePath = path.resolve(__filename)
//  reslovePath =" P C:\Users\acer\Desktop\NODE 8AM\Day-5> path module" + "\app.js"
 

//   const diroutput = path.dirname (reslovePath);


//   console.log("diroutput" , diroutput) ;
  



 const baseoutput = path.basename  (__filename, ".js")
 const extensionoutput = path.extname (__filename)

 console.log("baseoutput",baseoutput);
  console.log("extensionoutput",extensionoutput);



 