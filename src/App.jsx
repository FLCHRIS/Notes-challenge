import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import UserProvider from './context/user/UserProvider'
import NoteProvider from './context/note/NoteProvider'

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<NoteProvider>
					<Router />
				</NoteProvider>
			</UserProvider>
		</BrowserRouter>
	)
}

export default App
