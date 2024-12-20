const Input = ({ children, id, label, placeholder, type, onChange, value }) => {
	return (
		<div>
			<label
				htmlFor={id}
				className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'
			>
				{label}
			</label>
			<div className='relative'>
				{children && (
					<div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
						{children}
					</div>
				)}
				<input
					type={type}
					id={id}
					name={id}
					className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${children && 'ps-10'}`}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
				/>
			</div>
		</div>
	)
}

export default Input
