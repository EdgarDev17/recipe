import Link from 'next/link'
import { useRouter } from 'next/router'

import {
	AiOutlineHeart,
	AiOutlineHome,
	AiOutlineFundView,
	AiOutlineUser,
} from 'react-icons/ai'

export const MenuBar = () => {

	const router = useRouter()
	let currentRoute = router.pathname
	const style={
		active: 'black',
		notActive: 'rgb(107 114 128)'
	}

	return (
		<div className=' bg-white shadow-sm border border-slate-300 py-4 mb-0 flex justify-around items-center'>
			<Link href={'/'}>
				<a className={'flex flex-col justify-center items-center'}>
					<AiOutlineHome size={'2em'} /* A ternary operator. It is a shorthand if/else statement. */
					color={currentRoute === '/' ? style.active : style.notActive}/>
					<span className='mt-3'>Inicio</span>
				</a>
			</Link>

			<Link href={'/favorites'}>
				<a className='flex flex-col justify-center items-center'>
					<AiOutlineHeart size={'2em'} color={currentRoute === '/favorites' ? style.active : style.notActive} />
					<span className='mt-3'>Favoritos</span>
				</a>
			</Link>

			<Link href={'/top'}>
				<a className='flex flex-col justify-center items-center'>
					<AiOutlineFundView size={'2em'} color={currentRoute === '/top' ? style.active : style.notActive}/>
					<span className='mt-3'>Popular</span>
				</a>
			</Link>

			<Link href={'/account'}>
				<a className='flex flex-col justify-center items-center'>
					<AiOutlineUser size={'2em'} color={currentRoute === '/account' ? style.active : style.notActive} />
					<span className='mt-3'>Perfil</span>
				</a>
			</Link>
		</div>
	)
}
