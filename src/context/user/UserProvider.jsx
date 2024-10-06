import { useState } from 'react'
import UserContext from './UserContext'

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const logIn = (user) => {
		setUser(user)
	}

	const logOut = () => {
		setUser(null)
	}

	return (
		<UserContext.Provider value={{ user, logIn, logOut }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
