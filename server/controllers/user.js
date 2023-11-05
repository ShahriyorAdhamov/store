const bcrypt = require('bcrypt');
const UserModel = require('../models/user');
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try{
        const {username, email, password}=req.body;
    
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password.toString(), salt);
    
        const doc = new UserModel({
            username, email, hashPassword
        })
        
        const user = await doc.save();
        const token = jwt.sign({
            _id: user._id
        },
        'secret',
        {
            expiresIn: '30d' 
        })
    
        const userData = user._doc
        return res.json({
            ...userData,
            token
        });
    } catch(err) {
        res.status(500).json({
            message: 'Не удалось зарегестрироваться'
        })
    }   
}
const login = async (req, res) =>{
    try{
        const user = await UserModel.findOne({ email: req.body.email});
        if(!user) {
            return res.status(404).json({
                message: 'неверный логин или пароль'
            })
        }
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.password);
        if(!isValidPass) {
            return res.status(404).json({
                message: 'неверный логин или пароль'
            })
        }
        const token = jwt.sign({
            _id: user._id
        },
        'secret', 
        {
            expiresIn: '30d'
        })

        const { password, ...userData} = user._doc
        return res.json({
            ...userData,
            token
        });
    } catch(err) {
        res.status(500).json({
            message: 'Не удалось войти в систему'
        })
    }
}
module.exports = {register, login}