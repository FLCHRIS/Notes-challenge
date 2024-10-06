import Input from '../components/Input'
import UserIcon from '../icons/UserIcon'
import LockIcon from '../icons/LockIcon'

const Login = () => {
	return (
		<div className='mt-10 flex items-center justify-center'>
			<form className='px-6 py-8 w-full max-w-lg rounded-md border border-gray-200 dark:border-gray-700'>
				<h1 className='text-3xl font-bold mb-3 text-gray-900 dark:text-white'>
					Log In
				</h1>
				<p className='text-gray-800 dark:text-gray-300 mb-5'>
					Please enter your username and password.
				</p>
				<div className='flex flex-col gap-7'>
					<Input
						label='Your username'
						type='text'
						id='username'
						placeholder='chris_dev'
					>
						<UserIcon style='size-5 text-gray-500 dark:text-gray-400' />
					</Input>
					<Input
						label='Your password'
						type='password'
						id='password'
						placeholder='**********'
					>
						<LockIcon style='size-5 text-gray-500 dark:text-gray-400' />
					</Input>
					<button
						type='submit'
						className='text-white ml-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Log In
					</button>
				</div>
			</form>
		</div>
	)
}

export default Login
