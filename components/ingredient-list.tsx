import Image from 'next/image'

const IngredientData = ({
	image,
	ingredientName,
	amount,
	unit,
	instructions,
}) => {
	return (
			<div className='flex justify-around my-5 items-center border border-slate-200 rounded-lg py-5 px-5'>
				<Image
					alt='Ingredient preview'
					src={image}
					width={50}
					height={50}
				/>
				<div className='w-3/5 flex justify-around items-center'>
					<p className='w-52'>{ingredientName}</p>
					
					<p className='flex  justify-center gap-x-5 ml-3'>
						<span className=' rounded w-10 h-10 flex justify-center items-center'>
						{amount}
						</span>
						<span className='rounded w-10 h-10 flex justify-center items-center'>
						 {unit}
						</span>
					</p>
				</div>
			</div>
	)
}

export default IngredientData
