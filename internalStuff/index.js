function testForEJS(path, req, res) {
    const fs = require("fs");
    if(!fs.existsSync(path)) {
        require("../e404")(req, res);
        return res.render("../e404.ejs", {req, res});
    }
    res.render("."+path, {req, res})
}

(async function() {
    const {logError} = require("../config")
    const fs = require("fs");
    const express = require("express");

    const app = express();
    await require("../init")(app, require("../config"));

    const middleWare = fs.readdirSync("./middleware")
    console.log(middleWare)
    middleWare.forEach(el=>{
        if(el.endsWith(".js")) {
            let m = require("../middleware/"+el);
            if(m.path && m.user) {
                app.use(m.path, m.use);
            }
            else if(m.use) {
                app.use(m.use);
            }
        }
    })

    app.use((err, req, res, next) => {
        if(logError) console.log(err);
        next();
    })

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