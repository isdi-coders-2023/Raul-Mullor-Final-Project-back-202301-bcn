import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../../CustomError/CustomError";
import { Character } from "../../../database/models/Characters/Characters";
import {
  type CharacterDataStructure,
  Alignment,
  Races,
  Classes,
  type CharactersDataStructure,
} from "../../../types/characters/types";
import getCharacters from "./characterControllers";

beforeEach(() => jest.clearAllMocks());

const mockCharacter: CharacterDataStructure = {
  name: "Victor",
  age: 32,
  gender: "male",
  height: "1.75",
  weight: "70kg",
  alignment: Alignment.ChaoticEvil,
  race: Races.human,
  pathfinderclass: Classes.monk,
  image: "",
  id: "",
};

const mockCharacterList: CharactersDataStructure = [mockCharacter];

describe("Given a getCharacters controller", () => {
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const req: Partial<
    Request<
      Record<string, unknown>,
      Record<string, unknown>,
      CharacterDataStructure
    >
  > = {};
  const next = jest.fn() as NextFunction;

  describe("When it receives a response ", () => {
    test("Then it should show status 200", async () => {
      const expectedStatusCode = 200;

      Character.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue(mockCharacterList),
      }));

      await getCharacters(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          CharacterDataStructure
        >,
        res as Response,
        next
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should show a character list", async () => {
      const expectedCharacter = { characters: [mockCharacter] };

      Character.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue(mockCharacterList),
      }));

      await getCharacters(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          CharacterDataStructure
        >,
        res as Response,
        next
      );

      expect(res.json).toHaveBeenCalledWith(expectedCharacter);
    });

    test("Then it should show an error with 'Bad request status 400 and Couldn't retrieve characters", async () => {
      const expectedError = new CustomError(
        "Bad request",
        400,
        "Couldn't retrieve characters"
      );

      await getCharacters(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          CharacterDataStructure
        >,
        res as Response,
        next
      );

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
