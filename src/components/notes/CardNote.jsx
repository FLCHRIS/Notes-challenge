import { useContext } from 'react'
import { formatDate } from '../../config/date'
import NoteContext from '../../context/note/NoteContext'
import ArchivedIcon from '../../icons/ArchivedIcon'
import NoteIcon from '../../icons/NoteIcon'
import EditIcon from '../../icons/EditIcon'
import DeleteIcon from '../../icons/DeleteIcon'
import UploadIcon from '../../icons/UploadIcon'

const CardNote = ({ id, title, content, updatedAt, archived }) => {
	const { deleteNote, updateNote } = useContext(NoteContext)

	const handleDelete = () => {
		deleteNote(id)
	}

	const handleArchive = () => {
		updateNote(id, { archived: !archived })
	}

	return (
		<article className='w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
			<div className='flex items-start gap-3 mb-3'>
				<NoteIcon style='size-9 text-gray-500 dark:text-gray-400' />
				<h1 className='text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-pretty'>
					{title}
				</h1>
			</div>
			<p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>{`${content.slice(0, 80)}...`}</p>
			<div className='flex items-center justify-between'>
				<time
					dateTime={updatedAt}
					className='block text-sm text-gray-400 dark:text-gray-500'
				>
					Last updated: {formatDate(updatedAt)}
				</time>
				<div className='flex items-center gap-1'>
					<button
						type='button'
						aria-label={archived ? 'Unarchive note' : 'Archive note'}
						className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
						onClick={handleArchive}
					>
						{archived ? (
							<UploadIcon style='size-full text-gray-800 dark:text-gray-300' />
						) : (
							<ArchivedIcon style='size-full text-gray-800 dark:text-gray-300' />
						)}
					</button>
					<button
						type='button'
						aria-label='Edit note'
						className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
					>
						<EditIcon style='size-full text-gray-800 dark:text-gray-300' />
					</button>
					<button
						onClick={handleDelete}
						type='button'
						aria-label='Delete note'
						className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
					>
						<DeleteIcon style='size-full text-gray-800 dark:text-gray-300' />
					</button>
				</div>
			</div>
		</article>
	)
}

export default CardNote
