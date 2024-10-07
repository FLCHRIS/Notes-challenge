import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage } from '../config/localStorage'
import UserContext from '../context/user/UserContext'

const ProtectedRoute = ({ children }) => {
	const { user, logIn } = useContext(UserContext)
	const navigate = useNavigate()

	useEffect(() => {
		const session = getLocalStorage('session')
		if (!user && session) return logIn(session)
		if (!user && !session) return navigate('/login')
	}, [user, logIn, navigate])

	return <>{children}</>
}

export default ProtectedRoute
