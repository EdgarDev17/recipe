import Image from 'next/image'
import Link from 'next/link'

export default function CardList({ products }) {
	return (
		<div>
			{/* for aligning lg:mx-0 */}
			<div className='mx-auto max-w-2xl py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-5'>
				<div className='grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{products.map((product) => (
						// this is my CARD
						// TODO: Make this a Card component

						<Link key={product.id} href={`/recipes/${product.id}`}>
							<a className='group'>
								<div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
									<Image
										alt={'preview'}
										width={'400px'}
										height={'250px'}
										src={product.image}
										className='h-full w-full object-cover object-center group-hover:opacity-75'
									/>
								</div>
								<h3 className='mt-7 text-md font-bold'>
									{product.title ? product.title : product.name} 
								</h3>

								<div></div>
								<p className='flex justify-end mt-1 text-md text-gray-900'>
									Publicada por: {product.sourceName ? product.sourceName : 'Guardado en favorito'}
								</p>

								<p className='w-32 mt-10 text-center rounded py-3  bg-yellow-400 text-md text-black'>
									Saber Más
								</p>
							</a>
						</Link>

						// TODO: Make this a Card component
					))}
				</div>
			</div>
		</div>
	)
}
