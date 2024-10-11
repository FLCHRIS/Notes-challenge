import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/user/UserContext'
import useThemeToggle from '../hooks/useThemeToggle'
import SunIcon from '../icons/SunIcon'
import MoonIcon from '../icons/MoonIcon'

const NavBar = () => {
	const { user, logOut } = useContext(UserContext)
	const { isDarkMode, toggleTheme } = useThemeToggle()

	const handleLogOut = () => {
		logOut()
	}

	return (
		<nav className='bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600 px-6 py-5 flex justify-between items-center w-full max-w-[1440px] mx-auto'>
			<Link
				to='/notes'
				className='text-lg font-medium text-gray-800 dark:text-white'
			>
				Notes App
			</Link>
			<div className='flex items-center gap-3'>
				<button
					type='button'
					onClick={toggleTheme}
					aria-label='Change color mode'
					className='size-9 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
				>
					{isDarkMode ? (
						<MoonIcon style='size-full text-white' />
					) : (
						<SunIcon style='size-full text-gray-800' />
					)}
				</button>
				{user && (
					<button
						type='button'
						className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
						onClick={handleLogOut}
					>
						Log Out
					</button>
				)}
			</div>
		</nav>
	)
}

export default NavBar
