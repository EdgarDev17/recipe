import Image from 'next/image'
import Link from 'next/link'

type Props = {
	id: string
	image: string
	title: string
	sourceName: string
}

function Recipe({ id, image, title, sourceName }: Props) {
	return (
		<>
			<Link key={id} href={`/recipes/${id}`}>
				<a className='h-52 flex items-center justify-around bg-gray-50 shadow rounded-lg'>
					<Image
						alt={'recipe preview'}
						width={'125px'}
						height={'125px'}
						src={image}
						className='rounded-lg object-cover object-center'
					/>

					<div className='ml-5'>
						<h3 className='font-bold text-gray-700 w-52'>{title}</h3>

						<p className='text-gray-500 mt-1'>
							Publicada por: {sourceName}
						</p>

						<p className='w-32 text-left mt-5 text-amber-500'>
							Saber Más
						</p>
					</div>
				</a>
			</Link>
		</>
	)
}

export default Recipe
