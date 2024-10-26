import React from 'react'

const InfoLogIn = () => {
  return (
    <div role='alert' className='absolute top-11 right-2 py-1.5 px-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md animate-fadeIn'>
      <p className='text-sm text-gray-800 dark:text-gray-300 '>
        User: <span className='font-medium text-gray-900 dark:text-white'>chris_dev</span>
      </p>
      <p className='text-sm text-gray-800 dark:text-gray-300 '>
        Password: <span className='font-medium text-gray-900 dark:text-white'>password</span>
      </p>
    </div>
  )
}

export default InfoLogIn