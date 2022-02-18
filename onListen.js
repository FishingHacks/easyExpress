// Functions that should be executed at the start of going online
module.exports = ()=>{
    console.log("Listening! http://localhost:"+require("./config").PORT);
}