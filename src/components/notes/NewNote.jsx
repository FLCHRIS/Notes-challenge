import Input from '../Input'
import ClosedIcon from '../../icons/ClosedIcon'

const NewNote = ({ setShowNewNote }) => {
	return (
		<div className='fixed z-10 size-full inset-0 animate-fadeIn flex items-center justify-center px-5 bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm'>
			<div className='relative px-5 py-7 w-full max-w-lg rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
				<h1 className='text-3xl font-medium mb-5 text-gray-900 dark:text-white'>
					New Note
				</h1>
				<button
					type='button'
					aria-label='Close modal'
					className='absolute top-2 right-2 size-8 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
					onClick={() => setShowNewNote(false)}
				>
					<ClosedIcon style='size-full text-gray-800 dark:text-gray-300' />
				</button>
				<form>
					<div className='flex flex-col gap-3'>
						<Input
							label='Title'
							type='text'
							id='title'
							placeholder='New note'
						/>
						<div>
							<label
								htmlFor='content'
								className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'
							>
								Content
							</label>
							<textarea
								id='content'
								name='content'
								rows='4'
								className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Write your notes here...'
							/>
						</div>
						<Input
							label='Title'
							type='text'
							id='title'
							placeholder='New note'
						/>
						<button
							type='submit'
							className='text-white ml-auto mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Save Note
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default NewNote