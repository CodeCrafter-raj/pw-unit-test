
📜 License
This project is for educational/demo purposes.

🧪 Notes App – Unit Testing
This project demonstrates unit testing in a simple Notes API built with Node.js, Express, and MongoDB using Jest and Supertest for testing.

The app includes:

User registration & login

JWT-based authentication

Note creation


📁 Project Structure
├── controllers/
│   ├── noteController.js
│   └── userController.js
├── models/
│   ├── Note.js
│   └── User.js
├── routes/
│   ├── noteRoutes.js
│   └── userRoutes.js
├── tests/
│   ├── userModel.test.js
│   ├── noteModel.test.js
│   └── userController.test.js
├── server.js
├── .env
└── package.json


⚙️ Installation & Setup
1.Clone the repo
                git clone https://github.com/your-username/notes-app-testing.git
                cd notes-app-testing


2.Install dependencies
                    npm install


3.Environment file
Create a .env file in the root with:
                                  MONGO_URI=your_mongo_connection_string
                                  JWT_SECRET=secret




4.Run the server
                    node server.js




✅ 5.Running Tests
To run unit tests:
                      npm test


Uses Jest and Supertest to test:

User model validation

Note model validation

User registration logic



🧪 What’s Tested?
Test File	Description
userModel.test.js	Validates required fields in User schema.
noteModel.test.js	Validates required fields in Note schema.
userController.test.js	Tests registerUser controller with mocked MongoDB.



💡 Notes
We are using CommonJS (require) instead of ES Modules to avoid the need for "type": "module".

Mongoose models are manually mocked in the controller unit tests to isolate logic.

Integration tests can also be added for complete route testing.







