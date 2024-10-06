import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const MainLayout = () => {
	return (
		<>
			<NavBar />
			<main className='px-6 py-5 w-full max-w-[1440px] mx-auto'>
				<Outlet />
			</main>
			<div className='fixed -z-10 top-0 left-0 h-full w-full bg-white dark:bg-gray-900'>
				<div className='absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151a7_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]' />
			</div>
		</>
	)
}

export default MainLayout
