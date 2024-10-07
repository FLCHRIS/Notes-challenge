import { useState } from 'react'
import ChevronIcon from '../icons/ChevronIcon'

const CATEGORIES = [
	{ id: 1, name: 'Work' },
	{ id: 2, name: 'Personal' },
	{ id: 3, name: 'Study' },
	{ id: 4, name: 'Projects' },
	{ id: 5, name: 'Ideas' },
	{ id: 6, name: 'Shopping' },
	{ id: 7, name: 'To-Do' },
	{ id: 8, name: 'Health' },
]

const MultiSelect = ({ label, values, setValues }) => {
	const [showDropdown, setShowDropdown] = useState(false)

	const handleSelect = (value) => {
		const index = values.indexOf(value)
		index === -1
			? setValues([...values, value])
			: setValues(values.filter((v) => v !== value))
		setShowDropdown(false)
	}

	return (
		<div className='relative z-10'>
			<p className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
				{label}
			</p>
			<button
				type='button'
				className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex items-center justify-between ${showDropdown && 'scale-95 opacity-80'} transition-transform`}
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<span
					className={`${values.length === 0 ? 'text-gray-400' : 'text-gray-900 dark:text-white'}`}
				>
					{values.length === 0
						? 'Select an option'
						: values.join(', ')}
				</span>
				<ChevronIcon style='w-5 h-5 text-gray-800 dark:text-gray-300' />
			</button>
			{showDropdown && (
				<div className='absolute animate-translateIn z-0 left-0 top-[calc(100%+8px)] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white max-h-36 overflow-y-auto'>
					<ul className='flex flex-col gap-1 overflow-hidden'>
						<li>
							<button
								type='button'
								className='w-full p-2.5 text-start hover:bg-gray-200 hover:dark:bg-gray-800 transition-colors'
								onClick={() => {
									setValues([])
									setShowDropdown(false)
								}}
							>
								Clear all
							</button>
						</li>
						{CATEGORIES.map((category) => (
							<li key={category.id}>
								<button
									type='button'
									className='w-full p-2.5 text-start hover:bg-gray-200 hover:dark:bg-gray-800 transition-colors'
									onClick={() => handleSelect(category.name)}
								>
									{category.name}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default MultiSelect
