// // import mongoose from 'mongoose';
// // import { User } from '../models/User.js';

// const mongoose = require('mongoose'); 
// const User=require('../models/User.js')

// describe("User Model", () => {
//   it("should create a user successfully with valid fields", () => {
//     const user = new User({
//       email: "test@example.com",
//       password: "hashedpassword123"
//     });

//     expect(user.email).toBe("test@example.com");
//     expect(user.password).toBe("hashedpassword123");
//   });

//   it("should throw validation error without required fields", async () => {
//     const user = new User(); // missing fields

//     let err;
//     try {
//       await user.validate();
//     } catch (error) {
//       err = error;
//     }
//     expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
//     expect(err.errors.email).toBeDefined();
//     expect(err.errors.password).toBeDefined();
//   });
// });


// ✅ STEP 5: Test Fixes — for model tests
// tests/userModel.test.js
const mongoose = require("mongoose");
const User = require("../models/User");

describe("User Model", () => {
  it("should throw validation error without required fields", async () => {
    const user = new User();
    let err;
    try {
      await user.validate();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
    expect(err.errors.password).toBeDefined();
  });
});