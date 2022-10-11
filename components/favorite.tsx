import Image from 'next/image'
import Link from 'next/link'

type Props = {
	id: string
	image: string
	name: string
	url: string
}

function favorite({ id, image, name, url }: Props) {
	return (
		<>
			<div>
				<div className='grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
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

							<p className='w-32 mt-10 text-center rounded py-3  bg-yellow-400 text-md text-black'>
								Saber Más
							</p>
						</a>
					</Link>
				</div>
			</div>
		</>
	)
}

export default favorite
