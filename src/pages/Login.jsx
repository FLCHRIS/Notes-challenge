import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import UserContext from '../context/user/UserContext'
import Input from '../components/Input'
import UserIcon from '../icons/UserIcon'
import LockIcon from '../icons/LockIcon'
import QuestionIcon from '../icons/QuestionIcon'
import Alert from '../components/Alert'
import InfoLogIn from '../components/InfoLogIn'

const Login = () => {
	const navigate = useNavigate()
	const { logIn } = useContext(UserContext)
	const [showQuestion, setShowQuestion] = useState(false)
	const { values, error, setError, handleChange, handleSubmit } = useForm(
		{
			username: '',
			password: '',
		},
		false,
	)

	const validate = () => {
		return values.username === 'chris_dev' && values.password === 'password'
	}

	const onSubmit = () => {
		setError(false)

		if (!validate()) return setError(true)

		logIn(values)

		return navigate('/notes')
	}

	return (
		<div className='mt-10 flex items-center justify-center'>
			<form
				className='relative px-6 py-8 w-full max-w-lg rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
				onSubmit={(e) => handleSubmit(e, onSubmit)}
			>
				<h1 className='text-3xl font-bold mb-3 text-gray-900 dark:text-white'>
					Log In
				</h1>
				<p className='text-gray-800 dark:text-gray-300 mb-3'>
					Please enter your username and password.
				</p>
				{error && (
					<Alert type='error'>
						<span className='font-medium'>Error:</span> Wrong
						username or password.
					</Alert>
				)}
				<div className='flex flex-col gap-3'>
					<Input
						label='Your username'
						type='text'
						id='username'
						placeholder='chris_dev'
						value={values.username}
						onChange={handleChange}
					>
						<UserIcon style='size-5 text-gray-500 dark:text-gray-400' />
					</Input>
					<Input
						label='Your password'
						type='password'
						id='password'
						placeholder='**********'
						value={values.password}
						onChange={handleChange}
					>
						<LockIcon style='size-5 text-gray-500 dark:text-gray-400' />
					</Input>
					<button
						type='submit'
						className='text-white ml-auto mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Log In
					</button>
				</div>
				<button onClick={() => setShowQuestion(!showQuestion)} type="button" className='absolute top-2 right-2 size-8 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
					<QuestionIcon style='size-full text-gray-500 dark:text-gray-400' />
				</button>
				{
					showQuestion && <InfoLogIn />
				}
			</form>
		</div>
	)
}

export default Login
