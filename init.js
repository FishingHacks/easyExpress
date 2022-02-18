/**
 * Manage app.use and app.set and other stuff, that should be executed at the start here
 * @param {import("./internalStuff/types").Express} app 
 * @param {import("./config").config} config 
 */
module.exports = async function(app, config) {
    console.log("Setting up...");
    console.log("Finished setup");
}