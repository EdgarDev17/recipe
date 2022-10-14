import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {PopupModel} from './PopupModel'

type Props = {
    id: string
    image: string
    name: string
    url: string
}

function Favorite({id, image, name, url}: Props) {
    const [showModal, setShowModal] = useState(false)
    const Router = useRouter()

    async function deleteFavRecipe() {
        const body = {id}
        await fetch('/api/recipe', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })

        setShowModal(false)
        await Router.push('/favorites')
    }

    function onCancelPopup(): void {
        setShowModal(false)
    }

    return (
        <div>
            {showModal && (
                <div className={'w-full flex justify-center items-center'}>
                    <PopupModel
                        message='Desea eliminar la receta?'
                        mainBtnText='Continar'
                        secondaryBtnText='Cancelar'
                        handleAgreedBtn={deleteFavRecipe}
                        handleOnCancel={onCancelPopup}
                    />
                </div>
            )}
            <Link key={id} href={`/recipes/${url}`}>
                <a>
                    <div className='w-full flex justify-center overflow-hidden rounded'>
                        <Image
                            alt={'food preview'}
                            width={'400px'}
                            height={'400px'}
                            src={image}
                            className='object-cover object-center'
                        />
                    </div>
                    <h3 className='mt-7 text-md text-center font-bold'>{name}</h3>
                    <p className='mt-3 text-center text-md text-gray-500'>
                        Guardado en favoritos
                    </p>

                </a>
            </Link>
            <div className={'h-20 flex items-center justify-center'}>
                <Link href={`/recipes/${url}`}>
                    <a className='w-32 mr-5 text-center rounded py-3 bg-yellow-400 text-md text-black'>
                        Saber Más
                    </a>
                </Link>

                <button
                    onClick={() => setShowModal(true)}
                    className='w-32 text-center rounded py-3  bg-red-400 text-md text-black'
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Favorite
