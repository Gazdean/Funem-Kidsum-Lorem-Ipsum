import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

export default function ResetPassword() {
  const {register, handleSubmit, formState:{errors}} = useForm()

  const emailRegex = /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/

  const onSubmit = async(data)=> {
    try {
      console.log('Yolo', data)
    } catch {

    } finally {

    }
  }


  return (
    <div id="forgot-password-page" className='flex justify-center items-center bg-main min-h-[80vh] md:min-h-[73vh]'>

      <form id="forgot-password-form" className='bg-second flex flex-col w-[100vw] md:w-1/3 pl-12 pr-12 pt-6 pb-6 rounded-2xl shadow-[20px_25px_40px_-15px_#414529]' onSubmit={handleSubmit(onSubmit)} noValidate>
        
        <h1 className='text-2xl md:text-3xl self-center mb-4'>Forgot Password</h1>
        <p>Enter your email, if its a registered we will send a password reset link to your email address.</p>
        <p className='mt-2'>Can't find it? plaese check your junk folder.</p>

        <label className='p-1 pl-2 mt-6 text-sm md:text-base' htmlFor="email">Email </label>
        <input id="email" className='text-sm md:text-base p-1 pl-2 pr-2 rounded-lg' type="email" placeholder='johnjohnson@email.com' name='email' {...register('email', {required:true, pattern: emailRegex})}/>
        {errors.email?.type==="required"&&<p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2" >An email is required</p>}
        {errors.email?.type==="pattern"&&<p tabIndex="0" className="text-sm md:text-base text-red-700 mt-2">Must be a valid email address</p>}

        <button className='inline-block border-2 border-black rounded-lg w-auto p-1 mt-4 mb-3' type="submit">Submit</button>
        <p className='self-center text-sm md:text-base'>Back to <NavLink to="/sign-in" className='text-blue-700'>sign in</NavLink></p>
        <p className='self-center'>Or</p>
        <p className='self-center text-sm md:text-base'>Need an account? <NavLink to="/register" className='text-blue-700'>Register</NavLink></p>
      </form>
    </div>
  )
}