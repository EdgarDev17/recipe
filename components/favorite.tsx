import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { PopupModel } from './popup-modal'
import { GrFavorite, GrFormClose } from 'react-icons/gr'
import { motion, AnimatePresence } from 'framer-motion'
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
	const {deleteFavRecipe} = useFavorite()
	
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
					<div className={'w-full flex justify-center bg-black items-center'}>
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
				<div className='flex rounded bg-gray-50 shadow'>
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
							<h3 className='mt-5 text-center font-semibold'>
								{name}
							</h3>
						</div>

						<div className='w-52 flex flex-col gap-y-3 py-5'>
							<div className='w-full flex justify-around items-center'>
							<Link href={`/recipes/${url}`}>
									<a className='text-slate-900'>Saber Más</a>
								</Link>

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
		</AnimatePresence>
	)
}

