function testForEJS(path, req, res) {
    console.log(path)
    const fs = require("fs");
    if(!fs.existsSync(path)) {
        require("../e404")(req, res);
        res.render("../e404.ejs", {req, res});
    }
    res.render("."+path, {req, res})
}

(async function() {
    const fs = require("fs");
    const express = require("express");

    const app = express();
    await require("../init")(app, require("../config"));

    app.get("*", (req, res) => {
        if(fs.existsSync("./routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "get.js")) require("../routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "get.js")(req, res);
        testForEJS("./routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "get.ejs", req, res);
    });

    app.put("*", (req, res) => {
        if(fs.existsSync("./routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "put.js")) require("../routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "put.js")(req, res);
        testForEJS("./routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "put.ejs", req, res);
    });

    app.post("*", (req, res) => {
        if(fs.existsSync("./routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "post.js")) require("../routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "post.js")(req, res);
        testForEJS("./routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "post.ejs", req, res);
    });

    app.delete("*", (req, res) => {
        if(fs.existsSync("./routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "delete.js")) require("../routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "delete.js")(req, res);
        testForEJS("./routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "delete.ejs", req, res);
    });

    app.purge("*", (req, res) => {
        if(fs.existsSync("./routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "purge.js")) require("../routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "purge.js")(req, res);
        testForEJS("./routes" + req.url.split("?")[0] + (req.url.split("?")[0]=="/"?"":"/") + "purge.ejs", req, res);
    });

    app.listen(require("../config").PORT, require("../onListen"))
})();