import { useState } from 'react'
import { CATEGORIES } from '../utils/categories'
import ChevronIcon from '../icons/ChevronIcon'

const Select = ({ value, setValue }) => {
	const [showDropdown, setShowDropdown] = useState(false)

	const handleClick = (value) => {
		setValue((prev) => (prev === value ? '' : value))
		setShowDropdown(false)
	}

	return (
		<div className='relative z-10'>
			<button
				type='button'
				className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg min-w-32 py-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white flex items-center justify-between ${showDropdown && 'scale-95 opacity-80'} transition-transform`}
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<span
					className={`${value === '' ? 'text-gray-400' : 'text-gray-900 dark:text-white'}`}
				>
					{value === '' ? 'Filter by' : value}
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
									setValue('')
									setShowDropdown(false)
								}}
							>
								Clear
							</button>
						</li>
						{CATEGORIES.map((category) => (
							<li
								key={category.id}
								className='flex items-center gap-2 hover:bg-gray-200 hover:dark:bg-gray-800 transition-colors'
							>
								<button
									type='button'
									className='w-full p-2.5 text-start'
									onClick={() => handleClick(category.name)}
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

export default Select
