const EmptyState = ({ message }) => {
	return (
		<div className='flex items-center justify-center'>
			<div className='w-max px-4 py-2 font-medium leading-none text-center text-gray-800 bg-gray-200 rounded-full animate-pulse dark:bg-gray-700 dark:text-gray-300'>
				{message}
			</div>
		</div>
	)
}

export default EmptyState
