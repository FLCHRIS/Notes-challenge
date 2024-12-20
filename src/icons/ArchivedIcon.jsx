const ArchivedIcon = ({ style }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={style}
		>
			<title>Archived</title>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
			<path d='M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10' />
			<path d='M10 12l4 0' />
		</svg>
	)
}

export default ArchivedIcon
