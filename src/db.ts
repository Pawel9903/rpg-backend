"use strict";

import {config} from "dotenv"
import {createConnection} from 'mysql'
config();

const {env: { DB_HOST:host, DB_USER: user, DB_PASS: password, DB_NAME: database }} = process;
const connection = createConnection({host, user, password, database});

connection.connect((err) => {
    if (err) throw err;
});

export default connection