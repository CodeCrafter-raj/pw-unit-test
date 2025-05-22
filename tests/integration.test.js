import request from "supertest";
import app from "../server.js";
import mongoose from "mongoose";
import User from "../models/User.js";
import Note from "../models/Note.js";

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
});

afterAll(async () => {
  await User.deleteMany();
  await Note.deleteMany();
  await mongoose.connection.close();
});

let token;

test("Register a new user", async () => {
  const res = await request(app).post("/api/users/register").send({
    email: "test@example.com",
    password: "password",
  });
  expect(res.statusCode).toBe(201);
});

test("Login user and get token", async () => {
  const res = await request(app).post("/api/users/login").send({
    email: "test@example.com",
    password: "password",
  });
  expect(res.statusCode).toBe(200);
  expect(res.body.token).toBeDefined();
  token = res.body.token;
});

test("Create a note with token", async () => {
  const res = await request(app)
    .post("/api/notes")
    .set("Authorization", `Bearer ${token}`)
    .send({ content: "Integration test note" });
  expect(res.statusCode).toBe(201);
  expect(res.body.content).toBe("Integration test note");
});
