# Easy Express

How to use:

1. Change config in config.js
2. Before launch, init.js will be executed with app and the config
3. onListen will be launched with the app.listen(); function

routes/path/mathod.js will be launched with req, res and after that, routes/path/method.ejs will be rendered with req and res.

DELETE /notes/1 will be:
/routes/notes/1/delete.js(req, res) -> render(/routes/notes/1/delete.ejs, {req, res});

Methods that are to this point supported:
get
post
put
delete
prurge

/e404.(e)js will be executed/rendered when the route was not found

the javascript file can be existent, when the embedded javascript file isn't existent, the javascript file will be launched if existent and after that the e404.js, and finally then, the e404.ejs will be rendered

# Note
This is a leightweight version, used for SPAs (**S**ignle**P**age**A**pplication**s**). A more complex one will come in the future