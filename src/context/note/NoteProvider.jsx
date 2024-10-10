import { useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../../config/localStorage'
import NoteContext from './NoteContext'

const NoteProvider = ({ children }) => {
	const [notes, setNotes] = useState([])

	const addNote = (note) => {
		setNotes((prevNotes) => {
			const updateNotes = [...prevNotes, note]
			setLocalStorage('notes', updateNotes)
			return updateNotes
		})
	}

	const deleteNote = (id) => {
		setNotes((prevNotes) => {
			const updateNotes = prevNotes.filter((note) => note.id !== id)
			setLocalStorage('notes', updateNotes)
			return updateNotes
		})
	}

	const updateNotes = (id, updatedNote) => {
		setNotes((prevNotes) => {
			const updateNotes = prevNotes.map((note) =>
				note.id === id ? { ...note, ...updatedNote } : note,
			)
			setLocalStorage('notes', updateNotes)
			return updateNotes
		})
	}

	useEffect(() => {
		const notesData = getLocalStorage('notes')
		if (notesData) setNotes(notesData)
	}, [])

	return (
		<NoteContext.Provider
			value={{ notes, addNote, updateNotes, deleteNote }}
		>
			{children}
		</NoteContext.Provider>
	)
}

export default NoteProvider
