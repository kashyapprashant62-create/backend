const http = require("http");
const { json } = require("stream/consumers");



// create server 

const server = http.createServer((req, res) => {



    if (req.method === "POST" && req.url === "/greet") {
        let obj = "";
        req.on("data", (chunk) => {
            obj = obj + chunk.toString();

        })
        req.on("end", () => {
            let { fullname } = JSON.parse(obj)
            return res.end('good morning & {fullname}')
        })
        return
    }
    if (req.method === "GET" && req.url === "/")
         
{
    return res.end(" server chal rha hain bhai") }
})

//  2 to run server 
server.listen(3000, () => {
    console.log("server is runnnig");

})