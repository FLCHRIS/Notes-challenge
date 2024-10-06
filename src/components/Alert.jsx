import AlertIcon from '../icons/AlertIcon'

const typeAlerts = {
	success: 'bg-green-100 text-green-800 border-green-300',
	error: 'bg-red-50 text-red-800 border-red-300 dark:bg-gray-800 dark:text-red-400 dark:border-red-800',
	warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
	info: 'bg-blue-100 text-blue-800 border-blue-300',
}

const Alert = ({ children, type = 'info' }) => {
	return (
		<div
			className={`animate-fadeIn flex items-center p-4 mb-4 text-sm border rounded-lg ${typeAlerts[type]}`}
			role='alert'
		>
			<AlertIcon style='flex-shrink-0 inline size-5 me-1' />
			<span className='sr-only'>{type}</span>
			<div>{children}</div>
		</div>
	)
}

export default Alert
