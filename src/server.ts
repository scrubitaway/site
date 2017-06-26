import * as Express from "express";
declare let process : any;
let app = Express();

app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.listen(process.env.PORT || 8090)