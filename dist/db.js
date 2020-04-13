"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const { env: { DB_HOST: host, DB_USER: user, DB_PASS: password, DB_NAME: database } } = process;
const connection = mysql_1.createConnection({ host, user, password, database });
connection.connect((err) => {
    if (err)
        throw err;
});
exports.default = connection;
//# sourceMappingURL=db.js.map