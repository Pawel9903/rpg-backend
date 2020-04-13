"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
const app = express_1.default();
const port = process.env.SERVER_PORT;
app.get('/', (req, res) => res.send('helllcdsdlo world'));
app.listen(port);
//# sourceMappingURL=index.js.map