import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import UserProvider from './context/user/UserProvider'

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Router />
			</UserProvider>
		</BrowserRouter>
	)
}

export default App
