// app.use(this.path, this.use) if path existent
// app.use(this.use) if path non existent
module.exports = {
    //path: "/",
    /**
     * 
     * @param {import("../internalStuff/types").Request} req 
     * @param {import("../internalStuff/types").Response} res 
     * @param {import("../internalStuff/types").NextFunction} next 
     */
    use: (req, res, next) => {
        console.log(`HTTP/${req.httpVersion}\n${req.method} ${req.url}\n${JSON.stringify(req.headers)}\n\n${req.body?.toString()}\n------------------------------`);
        next();
    }
}