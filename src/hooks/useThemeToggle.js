import { useState, useEffect } from 'react'
import { flushSync } from 'react-dom'

const useThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const toggleTheme = async () => {
		if (!document.startViewTransition) return setIsDarkMode(!isDarkMode)

		await document.startViewTransition(() => {
			flushSync(() => {
				setIsDarkMode(!isDarkMode)
			})
		}).ready
	}

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDarkMode])

	return { isDarkMode, toggleTheme }
}

export default useThemeToggle
