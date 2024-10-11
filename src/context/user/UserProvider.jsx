import { useState } from 'react'
import UserContext from './UserContext'
import { setLocalStorage, removeLocalStorage } from '../../config/localStorage'

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const logIn = (user) => {
		setUser(() => {
			setLocalStorage('session', user)
			return user
		})
	}

	const logOut = () => {
		setUser(() => {
			removeLocalStorage('session')
			return null
		})
	}

	const createSession = (user) => {
		setUser(user)
	}

	return (
		<UserContext.Provider value={{ user, logIn, logOut, createSession }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
