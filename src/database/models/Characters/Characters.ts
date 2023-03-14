import { model, Schema } from "mongoose";

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  alignmment: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  pathfinderClass: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Character = model("Character", CharacterSchema, "characters");
