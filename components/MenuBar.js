import Link from 'next/link'
import {
	AiOutlineHeart,
	AiOutlineHome,
	AiOutlineFundView,
	AiOutlineUser,
} from 'react-icons/ai'

export const MenuBar = () => {
	return (
		<div className=' bg-white shadow-sm border border-slate-300 py-4 mb-0 flex justify-around items-center'>
			<Link href={'/'}>
				<a className='flex flex-col justify-center items-center'>
					<AiOutlineHome size={'2em'} />
					<span className='mt-3'>Inicio</span>
				</a>
			</Link>

			<Link href={'/favorites'}>
				<a className='flex flex-col justify-center items-center'>
					<AiOutlineHeart size={'2em'} />
					<span className='mt-3'>Favoritos</span>
				</a>
			</Link>

			<Link href={'/top'}>
				<a className='flex flex-col justify-center items-center'>
					<AiOutlineFundView size={'2em'} />
					<span className='mt-3'>Popular</span>
				</a>
			</Link>

			<Link href={'/profile'}>
				<a className='flex flex-col justify-center items-center'>
					<AiOutlineUser size={'2em'} />
					<span className='mt-3'>Perfil</span>
				</a>
			</Link>
		</div>
	)
}
