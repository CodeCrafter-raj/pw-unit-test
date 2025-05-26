const { registerUser } = require('../controllers/userController');
const httpMocks = require('node-mocks-http');
const bcrypt = require("bcryptjs");

// Manual mock
const User = function (data) {
  return {
    ...data,
    save: jest.fn().mockResolvedValue({ _id: "1", email: data.email })
  };
};
User.findOne = jest.fn();

jest.mock('../models/User', () => User);
jest.mock('bcryptjs', () => ({
  hash: jest.fn().mockResolvedValue("hashedPassword")
}));

describe("User Controller - registerUser", () => {
  it("should register a user and return 201", async () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: {
        email: "test@example.com",
        password: "123456"
      }
    });
    const res = httpMocks.createResponse();

    User.findOne.mockResolvedValue(null); // Email not in use

    await registerUser(req, res);

    expect(res.statusCode).toBe(201);
    expect(res._getJSONData().message).toMatch(/User registered successfully/i);
  });
});
