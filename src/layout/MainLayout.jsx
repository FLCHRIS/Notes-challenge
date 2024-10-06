import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const MainLayout = () => {
	return (
		<>
			<NavBar />
			<main className='bg-white dark:bg-gray-900 px-6 py-5 w-full max-w-[1440px] mx-auto'>
				<Outlet />
			</main>
		</>
	)
}

export default MainLayout
