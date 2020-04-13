"use strict";

import {createConnection} from 'mysql'
import {config} from 'dotenv'
config();

const {env: { DB_HOST:host, DB_USER: user, DB_PASS: password, DB_NAME: database }} = process;
const connection = createConnection({host, user, password, database});

connection.connect((err) => {
    if (err) throw err;
});

export default connection