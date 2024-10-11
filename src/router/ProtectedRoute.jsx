import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage } from '../config/localStorage'
import UserContext from '../context/user/UserContext'

const ProtectedRoute = ({ children }) => {
	const { user, createSession } = useContext(UserContext)
	const navigate = useNavigate()

	useEffect(() => {
		const session = getLocalStorage('session')
		if (!user && session) return createSession(session)
		if (!user && !session) return navigate('/login')
	}, [user, createSession, navigate])

	return <>{children}</>
}

export default ProtectedRoute
