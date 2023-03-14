import { Router } from "express";
import { getCharacters } from "../../controllers/charactersControllers/characterControllers.js";

const getCharactersRoute = "/characters";

const charactersRouter = Router();

charactersRouter.get(getCharactersRoute, getCharacters);

export default charactersRouter;
