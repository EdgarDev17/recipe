import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
	id: string
	image: string
	name: string
	url: string
}

function Favorite({ id, image, name, url }: Props) {
	const [isDeleted, setIsDeleted] = useState(Boolean)
	
	async function deleteFavRecipe(id: string): Promise<boolean> {
		const body = { id }
		await fetch('/api/recipe', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		})

		return true
	}

	return (
		<>
			<div>
				<div className=' grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					<Link key={id} href={`/recipes/${url}`}>
						<a className='group'>
							<div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
								<Image
									alt={'preview'}
									width={'400px'}
									height={'250px'}
									src={image}
									className='h-full w-full object-cover object-center group-hover:opacity-75'
								/>
							</div>
							<h3 className='mt-7 text-md font-bold'>{name}</h3>

							<div></div>
							<p className='flex justify-end mt-1 text-md text-gray-900'>
								Guardado en favoritos
							</p>
							<p className='w-32 mt-5 text-center rounded py-3  bg-yellow-400 text-md text-black'>
								Saber Más
							</p>
						</a>
					</Link>
				</div>

				<button
					onClick={() => deleteFavRecipe(id)}
					className='w-32 mt-5 mb-10 text-center rounded py-3  bg-red-400 text-md text-black'
				>
					Eliminar
				</button>
			</div>
		</>
	)
}

export default Favorite
