import useThemeToggle from '../hooks/useThemeToggle'
import SunIcon from '../icons/SunIcon'
import MoonIcon from '../icons/MoonIcon'
import { Link } from 'react-router-dom'

const NavBar = () => {
	const { isDarkMode, toggleTheme } = useThemeToggle()

	return (
		<nav className='bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600 px-6 py-5 flex justify-between items-center w-full max-w-[1440px] mx-auto'>
			<Link
				to='/'
				className='text-lg font-medium text-gray-800 dark:text-white hover:scale-95 transition'
			>
				Notes App
			</Link>
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
		</nav>
	)
}

export default NavBar
