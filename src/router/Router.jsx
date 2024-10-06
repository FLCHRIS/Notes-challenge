import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Notes from '../pages/notes/Notes'
import Login from '../pages/Login'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/notes' />} />
			<Route path='/notes' element={<MainLayout />}>
				<Route index element={<Notes />} />
			</Route>
			<Route path='/login' element={<MainLayout />}>
				<Route index element={<Login />} />
			</Route>
			<Route path='*' element={<Navigate to='/notes' />} />
		</Routes>
	)
}

export default Router
