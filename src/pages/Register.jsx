import React from 'react'
import { useForm} from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import inputClasses from '../styles/inputClasses'
import { emailRegex, passwordRegex } from '../../regex'

export default function Register() {

  const {register, handleSubmit, watch, formState:{errors}} = useForm()

  const onSubmit = async(data)=> {
    try {
      console.log('Yolo', data)
    } catch {

    } finally {

    }
  }

  return (
    <div id="register-page" className='flex justify-center items-center bg-main min-h-[80vh] md:min-h-[73vh]'>

      <form id="register-form" className='bg-second flex flex-col w-[100vw] md:w-1/3 px-12 py-6 mx-8 my-8 rounded-2xl shadow-[20px_25px_40px_-15px_#414529]' onSubmit={handleSubmit(onSubmit)} noValidate>
        
        <h1 className='text-2xl md:text-3xl self-center mb-4'>Register</h1>

        <label className='p-1 pl-2 text-sm md:text-base' htmlFor="username">Username</label>
        <input id="username" className={inputClasses(errors, 'firstName')} type="text" placeholder='John' name='username' autoComplete='username'{...register('username', {required:true})}/>
        {errors.username?.type==="required" && <p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2" >A username is required</p>}

        {/* <label className='p-1 pl-2 text-sm md:text-base' htmlFor="last-name">Last Name</label>
        <input id="last-name" className={inputClasses(errors, 'lastName')} type="text" placeholder='Johnson' name='lastName' {...register('lastName', {required:true})}/>
        {errors.lastName?.type==="required" && <p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2" >A last name is required</p>} */}

        <label className='p-1 pl-2 text-sm md:text-base' htmlFor="email">Email</label>
        <input id="email" className={inputClasses(errors, 'email')} type="email" placeholder='johnjohnson@email.com' name='email' autoComplete='email'{...register('email', {required:true, pattern: emailRegex})}/>
        {errors.email?.type==="required"&&<p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2" >An email is required</p>}
        {errors.email?.type==="pattern"&&<p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2">Must be a valid email address</p>}

        <label className='p-1 pl-2 text-sm md:text-base' htmlFor="password">Password</label>
        <input id="password" className={inputClasses(errors, 'password')} type="password" placeholder='password' name='password' {...register('password', {required:true, pattern: passwordRegex})}/>
        {errors.password?.type==="required"&&<p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2">A password is required</p>}
        {errors.password?.type==="pattern"&&<p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2">Must be between 8 and 15 characters long and contain a uppercase letter, a lowercase letter, a number, and a special character.</p>}

        <label className='p-1 pl-2 text-sm md:text-base' htmlFor="confirm-password">Confirm Password</label>
        <input id="confirm-password" className={inputClasses(errors, 'confirmPassword')} type="password" placeholder='confirm password' name='confirmPassword' {...register("confirmPassword", {required: "Please confirm your password",validate: (value) =>value === watch("password") || "Passwords do not match"})}/>
        {errors.confirmPassword && ( <p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2">{errors.confirmPassword.message}</p>)}

        <button className='inline-block border-2 border-black rounded-lg w-auto p-1 mt-4 mb-3' type="submit">Submit</button>
        <p className='self-center text-sm md:text-base'>Already have an account? <NavLink to="/sign-in" className='text-blue-700'>Sign in</NavLink></p>
      </form>
    </div>
  )
}