import React from 'react'
import {motion} from 'framer-motion'


export default function Login() {
    

  return (
    <div className='h-screen w-screen bg-gradient-to-r from-purple-800 via-black to-blue-900 text-white'>
      <motion.main
        className='flex flex-col items-center justify-center p-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className='text-4xl font-bold text-purple-300 mb-10'>Login</h2>
        <motion.form
          className='bg-white/10 p-6 rounded-lg shadow-lg w-full max-w-md'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='mb-4'>
            <label className='block text-lg text-gray-300 mb-2'>Email</label>
            <input
              type='email'
              className='w-full p-2 rounded-lg bg-gray-800 text-white'
              placeholder='Your email'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-lg text-gray-300 mb-2'>Password</label>
            <input
              type='password'
              className='w-full p-2 rounded-lg bg-gray-800 text-white'
              placeholder='Your password'
              required
            />
          </div>
          <button
            type='submit'
            className='bg-purple-600 text-white py-2 px-4 rounded-lg'
          >
            Login
          </button>
          <p className='mt-4'>
            Don't have an account? <a href='/register' className='text-purple-300'>Register</a>
          </p>
        </motion.form>
      </motion.main>
   
    </div>
  )
}
