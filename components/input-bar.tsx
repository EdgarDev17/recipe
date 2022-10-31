import { useState } from 'react'

const Searchbar = ({ getQuery, label, placeholder }) => {
	const [inputText, setInputText] = useState('')

	const handleInputChange = (event) => {
		setInputText(event.target.value)
	}

	return (
		<form className='flex items-center justify-center'>
			<div className='relative w-full'>
				<label htmlFor="simple-search">
					{label}
				</label>

				<input
					type='text'
					id='simple-search'
					className='bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder={placeholder}
					onChange={handleInputChange}
				/>
			</div>

			<button
				type='button'
				onClick={() => getQuery(inputText)}
				className='p-2.5 ml-2 mt-9 text-sm text-white rounded-lg border focus:ring-4 focus:outline-none'
			>
				<svg
					className='w-5 h-5'
					fill='none'
					stroke='black'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
					></path>
				</svg>
				<span className='sr-only'>Nombre de la receta</span>
			</button>
		</form>
	)
}

export default Searchbar
