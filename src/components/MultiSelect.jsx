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

	const handleChange = (e) => {
		e.target.checked
			? setValues([...values, e.target.value])
			: setValues(values.filter((v) => v !== e.target.value))
	}

	return (
		<div className='relative z-10'>
			<p className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
				{label}
			</p>
			<button
				type='button'
				className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white flex items-center justify-between ${showDropdown && 'scale-95 opacity-80'} transition-transform`}
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
				<div className='absolute animate-fadeInDown z-0 left-0 top-[calc(100%+8px)] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white max-h-36 overflow-y-auto'>
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
							<li
								key={category.id}
								className='flex items-center gap-2 p-2.5 hover:bg-gray-200 hover:dark:bg-gray-800 transition-colors'
							>
								<input
									id={category.name}
									type='checkbox'
									value={category.name}
									checked={values.includes(category.name)}
									onChange={handleChange}
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
								/>
								<label
									htmlFor={category.name}
									className='w-full text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									{category.name}
								</label>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default MultiSelect
