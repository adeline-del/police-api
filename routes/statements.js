import { Router } from "express";
import { addStatement, deleteStatement, getStatement, getStatements, updateStatement } from "../controllers/statement_controller.js";
import { statementModel } from "../models/statement_model.js";

// creation of router
const statementRouter = Router();

statementRouter.get('/statement', getStatements);
statementRouter.post('/statement',  addStatement);
statementRouter.get('/statement/:id', getStatement);
statementRouter.patch('/statement/:id/:caseStatus', updateStatement);
statementRouter.delete('/statement/:id', deleteStatement)

export default statementRouter;
