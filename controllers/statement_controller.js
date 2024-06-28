import { statementModel } from "../models/statement_model.js";


// function to store data in the DB
export const addStatement = async (req, res) => {
    try {
        console.log('request', req.body)
        const addData = await statementModel.create(req.body);
        res.status(200).send(addData);
    } catch (error) {
        console.log(error);
    }
};

// get all Statemnet
export const getStatements = async (req, res) => {
    try {
        const getData = await statementModel.find();
        {
            res.status(200).json(getData);
        }
    } catch (error) {

    }
};


// get a single Statemnet
export const getStatement = async (req, res) => {
    try {
        const getSingleData = await statementModel.findById(req.params.id);
        {
            res.status(200).json(getSingleData);
        }
    } 
    catch (error) {
        next(error);
    }
};


// Update A statement

export const updateStatement = async (req, res) => {
    try {
        const status = req.params.caseStatus;
        console.log(status);
        const getData = await statementModel.findByIdAndUpdate(req.params.id, {caseStatus:status})
        {
            res.status(200).json(updateData)
    }

}catch (error) {
    // next(error);
}
  };

// Delete statement
export const deleteStatement = async (req, res, next) => {
    try {
        const deleteData = await statementModel.findByIdAndDelete (req.params.id);
        {
            res.status(200).json(`Statement with the ID:${req.params.id} has been deleted`);
        }
    } catch (error) {
        next(error)
    }
}


