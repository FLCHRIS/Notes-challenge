import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArchivedIcon from '../../icons/ArchivedIcon'
import AddIcon from '../../icons/AddIcon'
import NewNote from '../../components/notes/NewNote'

const Notes = () => {
	const [showNewNote, setShowNewNote] = useState(false)

	return (
		<div className='mt-5'>
			<div className='flex flex-col gap-5 md:flex-row md:justify-between'>
				<h1 className='text-4xl font-medium text-gray-800 dark:text-white'>
					My Notes
				</h1>
				<nav className='flex gap-2 items-center justify-center'>
					<button
						type='button'
						className='flex gap-1.5 items-center font-medium text-gray-800 dark:text-gray-300 hover:underline py-1 px-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors'
						onClick={() => setShowNewNote(!showNewNote)}
					>
						<AddIcon style='w-5 h-5 text-gray-800 dark:text-gray-300' />
						New Note
					</button>
					<Link
						to='/notes/archived'
						className='flex gap-1.5 items-center font-medium text-gray-800 dark:text-gray-300 hover:underline py-1 px-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors'
					>
						<ArchivedIcon style='w-5 h-5 text-gray-800 dark:text-gray-300' />
						Archived notes
					</Link>
				</nav>
			</div>
			{showNewNote && <NewNote setShowNewNote={setShowNewNote} />}
		</div>
	)
}

export default Notes
