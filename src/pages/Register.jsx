import React, { useState } from 'react'
import { useForm} from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import inputClasses from '../styles/inputClasses'
import { emailRegex, passwordRegex } from '../../regex'
import { createUser } from '../apiCalls/apiCall-register'
import AccountRegisteredMsg from '../components/messages/AccountRegisteredMsg'

export default function Register() {

  const {register, handleSubmit, watch, reset, formState:{errors}} = useForm()
  const [error, setError] = useState('')
  const [registering, setRegistering] = useState(false)
  const [registered, setRegistered] = useState(false)

  const emptyFormObj = { username: '', email: '', password: '', confirmPassword: '' }

  const onSubmit = async(data)=> {
    setError('')
    setRegistering(true)
    const {username, email, password} = data
    const userObj = {username, email, password}
    try {
      await createUser(userObj)
      setRegistered(true)
    } catch(err) {
      setError(err.message)
      if(err.message.includes('email')) reset(emptyFormObj)
    } finally {
      setRegistering(false)
    }
  }

  return (
    <div id="register-page" className='flex justify-center items-center bg-main min-h-[80vh] md:min-h-[73vh]'>
      {registered && <AccountRegisteredMsg setRegistered={setRegistered}/>}
      <form id="register-form" className={`bg-second flex flex-col w-[100vw] md:w-1/3 px-12 py-6 mx-8 my-8 rounded-2xl shadow-[20px_25px_40px_-15px_#414529] ${registered && 'opacity-30'}`} onSubmit={handleSubmit(onSubmit)} noValidate>
        
        <h1 className='text-2xl md:text-3xl self-center mb-4'>Register</h1>
        
        <p className={`text-md md:text-lg ${ error && 'text-red-600'}  ${ registering && 'text-blue-600'} self-center`} style={{ minHeight: '2rem' }}>{error ? error : registering ? 'Registering your account' : ''}</p>

        <label className='p-1 pl-2 text-sm md:text-base' htmlFor="username">Username</label>
        <input id="username" className={inputClasses(errors, 'firstName')} type="text" autoComplete="username" placeholder='JonnyJ' name='username' {...register('username', {required:true})}/>
        {errors.username?.type==="required" && <p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2" >A username is required</p>}

        <label className='p-1 pl-2 text-sm md:text-base' htmlFor="email">Email</label>
        <input id="email" className={inputClasses(errors, 'email')} type="email" autoComplete="email" placeholder='johnjohnson@email.com' name='email' {...register('email', {required:true, pattern: emailRegex})}/>
        {errors.email?.type==="required"&&<p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2" >An email is required</p>}
        {errors.email?.type==="pattern"&&<p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2">Must be a valid email address</p>}

        <label className='p-1 pl-2 text-sm md:text-base' htmlFor="password">Password</label>
        <input id="password" className={inputClasses(errors, 'password')} type="password" placeholder='password' name='password' {...register('password', {required:true, pattern: passwordRegex})}/>
        {errors.password?.type==="required"&&<p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2">A password is required</p>}
        {errors.password?.type==="pattern"&&<p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2">Must be between 8 and 15 characters long and contain a uppercase letter, a lowercase letter, a number, and a special character.</p>}

        <label className='p-1 pl-2 text-sm md:text-base' htmlFor="confirm-password">Confirm Password</label>
        <input id="confirm-password" className={inputClasses(errors, 'confirmPassword')} type="password" placeholder='confirm password' name='confirmPassword' {...register("confirmPassword", {required: "Please confirm your password",validate: (value) =>value === watch("password") || "Passwords do not match"})}/>
        {errors.confirmPassword && ( <p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2">{errors.confirmPassword.message}</p>)}

        <button className='inline-block border-2 border-black rounded-lg w-auto p-1 mt-4 mb-3' type="submit" disabled={registering}>Submit</button>
        
        <div className='flex justify-center items-center text-center'>
          <p className='self-center text-sm md:text-base'>Already have an account?</p> 
          <NavLink to="/sign-in"> 
            <p className='text-blue-700 ml-3'>Sign in</p>
          </NavLink>
        </div>
      </form>
    </div>
  )
}