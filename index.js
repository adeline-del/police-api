// import
import express from "express";
import statementRouter from "./routes/statements.js";
import { dbConnection } from "./cofig/db.js";
import 'dotenv/config';

// Write in .json file
// added start to the modules "start": "node index.js"


// creation of the exprss App
const police_app = express();

dbConnection();

// middleware 
police_app.use(express.json());

// use Router
police_app.use(statementRouter);
// police_app.use(router)


// port
police_app.listen(3030, () => {
    console.log("App is listening on port 3030");
});