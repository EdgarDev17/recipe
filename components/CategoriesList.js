export const CategoriesList = ({ categoriesList, getCategory }) => {
	const categories = [
		{ id: 1, english: 'breakfast', spanish: 'Desayuno' },
		{ id: 2, english: 'launch', spanish: 'Almuerzo' },
		{ id: 3, english: 'dinner', spanish: 'Cena' },
	]

	return (
		<>
			<div className='flex mt-10 justify-start items-center'>
				{categories.map((category) => {
					return (
						<a
							href='#'
							key={category.id}
							onClick={()=> getCategory(category.english)}
							className='mr-5'
						>
							{category.spanish}
						</a>
					)
				})}
			</div>
		</>
	)
}
