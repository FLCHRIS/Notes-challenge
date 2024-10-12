import { useContext } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../../context/note/NoteContext'
import ArrowLeftIcon from '../../icons/ArrowLeftIcon'
import EmptyState from '../../components/EmptyState'
import CardNote from '../../components/notes/CardNote'

const Archived = () => {
	const { notes } = useContext(NoteContext)
	const archivedNotes = notes.filter((note) => note.archived)

	return (
		<section className='mt-5'>
			<div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
				<h1 className='text-4xl font-medium text-gray-800 dark:text-white text-start'>
					Archived notes
				</h1>
				<Link
					to='/notes'
					className='flex gap-1.5 mx-auto sm:mx-0 items-center font-medium text-gray-800 dark:text-gray-300 hover:underline py-1 px-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors'
				>
					<ArrowLeftIcon style='w-5 h-5 text-gray-800 dark:text-gray-300' />
					Go back to unarchived notes
				</Link>
			</div>
			<div className='mt-10 grid grid-cols-1 gap-3 justify-items-center md:grid-cols-2 lg:grid-cols-3'>
				{archivedNotes.map((note) => (
					<CardNote
						key={note.id}
						note={note}
					/>
				))}
			</div>
			{archivedNotes.length === 0 && (
				<EmptyState message='There are no notes archived' />
			)}
		</section>
	)
}

export default Archived
