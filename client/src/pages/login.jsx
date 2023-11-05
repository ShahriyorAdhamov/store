import {useEffect} from 'react'
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux'
// import { fetchUserData } from "../slices/";
import { Link, useNavigate } from "react-router-dom";

import '../scss/auth/login.css'

export const Login = () => {
    const {isAuth} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors},
    } = useForm({
      mode: "onBlur",
    });
    const onSubmit = (data) => {
      console.log(data)
      // dispatch(fetchUserData(data))
      reset();
    };
  
    useEffect(() => {
          if (isAuth) {
              navigate('/')
          }
      }, [isAuth, navigate])
    return (
      <div className='auth'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            placeholder='email'
            type="email"  
            {...register("email", {
               required: "Поле обязательно для заполнения"})} 
          />
          <input 
            placeholder='password'
            type="password"  
            {...register("password", {
               required: "Поле обязательно для заполнения"})} 
          />
          <button type='submit'>Submit</button>
          <Link to={'/register'}>register</Link>
        </form>
      </div>
    );
  };
