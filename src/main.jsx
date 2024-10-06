import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Supports weights 100-900
import '@fontsource-variable/noto-sans'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
