const express = require('express');
const dotenv = require('dotenv')
const userController = require('./controllers/user');
const { registerValidation, loginValidation } = require('./validation/auth');
const { validationResult } = require('express-validator');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3003;

app.post('auth/register',registerValidation, validationResult, userController.register);
app.post('/auth/login',loginValidation, validationResult, userController.login);


app.listen(PORT, () => {
    console.log(`server: ${PORT}`);
})