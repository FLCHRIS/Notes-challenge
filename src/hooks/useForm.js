import { useState } from 'react'

const useForm = (initialValues, initialErrors) => {
	const [values, setValues] = useState(initialValues)
	const [error, setError] = useState(initialErrors)

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	const handleSubmit = (e, callback) => {
		e.preventDefault()
		callback()
	}

	return {
		values,
		error,
		handleChange,
		handleSubmit,
		setError,
	}
}

export default useForm
