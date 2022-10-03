const Searchbar = () => {
	return (
		<form class='flex items-center'>
			<label for='simple-search' class='sr-only'>
				Search
			</label>
			<div class='relative w-full'>
                {/* INPUT  */}
				<input
					type='text'
					id='simple-search'
					class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='Nombre de la receta'
					required=''
				/>
			</div>
			<button
				type='submit'
				class='p-2.5 ml-2 text-sm font-medium text-white  rounded-lg border focus:ring-4 focus:outline-none'
			>
				<svg
					class='w-5 h-5'
					fill='none'
					stroke='black'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
					></path>
				</svg>
				<span class='sr-only'>Nombre de la receta</span>
			</button>
		</form>
	)
}

export default Searchbar
