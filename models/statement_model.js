import { Schema, model } from "mongoose";

const statementSchema = new Schema({
    statementId: { type: String },
    incidentType: { type: String, enum: ['Non-Criminal', 'Criminal'] },
    civilianStatus: { type: String, enum: ['Offender', 'Complaniant', 'Witness'] },
    statement: { type: String },
    caseStatus: { type: String, enum: ['Open', 'Closed', 'Cold Case'] },
    civilianId: { type: String },
    createdAt: { type: Date, default: Date.now()},
    updatedAt: { type: Date, default: Date.now()}
});

export const statementModel = model('Statement', statementSchema);