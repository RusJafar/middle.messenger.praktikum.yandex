import express from "express";
import {config} from "dotenv";
import * as http from "http";


config();
const app = express();
const PORT = 3000;

http.createServer(app);
app.use(express.static(`./dist`));

app.listen(process.env.PORT || PORT, () => {
    console.log(`Express app listening on port ${PORT}`);
})
