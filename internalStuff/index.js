(async function() {
    const express = require("express");

    const app = express();
    await require("../init")(app, require("../config"));

    app.listen(require("../config").PORT, require("../onListen"))
})();