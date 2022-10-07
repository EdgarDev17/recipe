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
					className={'rounded-full w-2/5'}
				/>
				<div className='w-3/5 flex justify-around items-center'>
					<p className='w-full'>{ingredientName}</p>
					<p>
						{amount} {unit}
					</p>
				</div>
			</div>
	)
}

export default IngredientData
