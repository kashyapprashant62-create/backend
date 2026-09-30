 import crypto, { hash } from "crypto"


//  create otp 

//   const otpchar = crypto.randomBytes(3).toString("hex")
//   console.log("otp char:", otpchar);

//  create Api key 


//    const Apikey = crypto.randomBytes(16).toString("hex")
//       console.log("Apikey:",Apikey);
      
//    ! 2nd way 

        // const createotp = (length = 6) => crypto.randomInt(10**(length -1), 10**length);
        //  console.log(createotp()) 


        //  const password = "superman123" 
         


        //   const newotp =  (length = 6)  => crypto.randomInt(10**(length -1) , 10**length)
        //    console.log(newotp());
           

        //     const Oldopt =  (length = 6)  => crypto.randomInt(10**(length -1 ) , 10**length)
        //       console.log(Oldopt() );
              

        //  ! SHA = secure hashing alogorithm 
        
        
//          const password = "Superman"
           

// const passwordhash = crypto.createHash("sha256").update(password).digest("hex")
// console.log("passwordhash:",passwordhash);

//  const newpassword = "Superman"
//  const newpasswordhash = crypto.createHash("sha256").update(newpassword).digest("hex")
// console.log(passwordhash ===  newpasswordhash);
          
 



//       const createHash = (value) =>{
//          return crypto.createHash ("sha256").update(value).digest("hex")


//       };

//        const password = "superman1"
//        const   hashpassword = createHash(password)
//        console.log(" hashpassword:",   hashpassword);
       

//                const password2 = "superman1"
//        const newHashpassword = createHash(password2)
//        console.log(" hashpassword2:", newHashpassword);

//         console.log("comparsion:", hashpassword === newHashpassword );
        