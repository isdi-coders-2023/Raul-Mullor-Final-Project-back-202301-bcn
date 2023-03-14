import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import request from "supertest";
import connectDataBase from "../../../database/connectDataBase.js";
import { User } from "../../../database/models/User/User.js";
import { app } from "../../index.js";
import {
  type UserCredentials,
  type UserData,
} from "../../../types/users/types.js";

let mongodbServer: MongoMemoryServer;

beforeAll(async () => {
  mongodbServer = await MongoMemoryServer.create();
  const mongoServerUrl = mongodbServer.getUri();

  await connectDataBase(mongoServerUrl);
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongodbServer.stop();
});

afterEach(async () => {
  await User.deleteMany();
});

const mockUserDb: UserData = {
  email: "jhonny@jhon.com",
  password: "12345678",
  name: "don joan",
};

describe("Given a POST '/users/login' endpoint", () => {
  const user: UserCredentials = {
    email: "jhonny@jhon.com",
    password: "12345678",
  };
  const loginPath = "/users/login";

  describe("When it receives a request with an email 'jhonny@jhon.com' and a password '12345678'", () => {
    test("Then it should respond with status 200 and an object in its body with the property 'token'", async () => {
      jwt.sign = jest.fn().mockImplementation(() => ({
        token: "asdfasdfasdfgsadf3242345",
      }));
      const expectedStatus = 200;
      const hashedPassword = await bcryptjs.hash(user.password, 10);

      await User.create({
        ...mockUserDb,
        password: hashedPassword,
      });

      const response = await request(app)
        .post(loginPath)
        .send(user)
        .expect(expectedStatus);

      expect(response.body).toHaveProperty("token");
    });
  });
});
