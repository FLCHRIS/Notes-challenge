import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../../context/note/NoteContext'
import NoteForm from '../../components/notes/NoteForm'
import ArchivedIcon from '../../icons/ArchivedIcon'
import AddIcon from '../../icons/AddIcon'
import CardNote from '../../components/notes/CardNote'
import EmptyState from '../../components/EmptyState'
import Select from '../../components/Select'

const Notes = () => {
	const { notes } = useContext(NoteContext)
	const [showNewNote, setShowNewNote] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState('')

	const activeNotes = notes.filter((note) => {
		return (
			!note.archived &&
			(selectedCategory === '' ||
				note.categories.some(
					(category) => category === selectedCategory,
				))
		)
	})

	return (
		<section className='mt-5'>
			<div className='flex flex-col gap-5 md:flex-row md:justify-between'>
				<div className='flex items-center justify-between gap-2 md:gap-7'>
					<h1 className='text-4xl font-medium text-gray-800 dark:text-white'>
						My Notes
					</h1>
					<Select
						value={selectedCategory}
						setValue={setSelectedCategory}
					/>
				</div>
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
			<div className='mt-10 grid grid-cols-1 gap-3 justify-items-center md:grid-cols-2 lg:grid-cols-3'>
				{activeNotes.map((note) => (
					<CardNote
						key={note.id}
						note={note}
					/>
				))}
			</div>
			{activeNotes.length === 0 && (
				<EmptyState message='There are no notes' />
			)}
			{showNewNote && <NoteForm setShowNewNote={setShowNewNote} />}
		</section>
	)
}

export default Notes
