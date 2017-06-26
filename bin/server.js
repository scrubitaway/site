"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
let app = Express();
app.get("/", (req, res) => {
    res.send("Welcome!");
});
app.listen(process.env.PORT || 8090);
//# sourceMappingURL=server.js.map