import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { PopupModel } from './popup-modal'
import { GrFormClose } from 'react-icons/gr'
import { AnimatePresence } from 'framer-motion'
import { useFavorite } from '../hooks/useFavorite'

type Props = {
	id: string
	image: string
	name: string
	url: string
}

export default function Favorite({ id, image, name, url }: Props) {
	const [showModal, setShowModal] = useState(false)
	const Router = useRouter()
	const { deleteFavRecipe } = useFavorite()

	async function handleDeleteFavorite() {
		await deleteFavRecipe(id)
		setShowModal(false)
		await Router.push('/favorites')
	}

	function onCancelPopup(): void {
		setShowModal(false)
	}

	return (
		<AnimatePresence>
			<div>
				{showModal && (
					<div
						className={
							'w-full flex justify-center bg-black items-center'
						}
					>
						<PopupModel
							oneButton={false}
							message='¿Desea eliminar la receta?'
							mainBtnText='Eliminar'
							secondaryBtnText='Cancelar'
							handleAgreedBtn={handleDeleteFavorite}
							handleOnCancel={onCancelPopup}
							variant='error'
						/>
					</div>
				)}
				{/* <Link key={id} href={`/recipes/${url}`} */}
				<div className='flex rounded h-32 bg-gray-50 shadow-md'>
					<div className='w-40 rounded flex justify-center items-center'>
						<Image
							alt={'food preview'}
							width={200}
							height={200}
							src={image}
							className='rounded object-cover object-center'
						/>
					</div>

					<div
						className={
							'w-full flex flex-col items-center justify-center'
						}
					>
						<div>
							<h3 className='mt-5 w-52 font-semibold'>{name}</h3>
						</div>

						<div className='w-52 pt-3'>
							<div className='w-full flex justify-between items-center'>
								<Link href={`/recipes/${url}`}>
									<a className='text-blue-800'>Saber Más</a>
								</Link>
								<div className=' bg-gray-100 hover:bg-red-100 rounded-xl'>
									<GrFormClose
										className='cursor-pointer'
										size={35}
										onClick={() => setShowModal(true)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AnimatePresence>
	)
}
