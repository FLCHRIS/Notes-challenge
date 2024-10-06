import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from './UserContext'

const UserProvider = ({ children }) => {
	const navigate = useNavigate()
	const [user, setUser] = useState(null)

	const logIn = (user) => {
		setUser(user)
		navigate('/notes')
	}

	const logOut = () => {
		setUser(null)
		navigate('/login')
	}

	return (
		<UserContext.Provider value={{ user, logIn, logOut }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
