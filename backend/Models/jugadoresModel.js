import { Schema,model } from "mongoose";

const jugadoresquema = new Schema({
    name:String,
    apepat:String,
    numero:Number
})
export const jugadormodelo = new model ("tabla de alumnos", jugadoresquema)