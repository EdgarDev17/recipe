import LoginButton from '../components/login_btn'
import Link from 'next/link'

const AuthCard = () => {
	return (
		<div className='h-screen flex flex-col justify-center items-center'>
			<p className='text-center text-2xl'>
				Hola, para poder disfrutar de miles de recetas, debes iniciar
				sesión con tu cuenta de Google
			</p>
			<div className='w-full flex my-5 justify-center'>
				<Link href={'/login'}>
					<a
						href=''
						className='bg-black rounded-lg text-white text-lg  px-5 py-2'
					>
						Ir al inicio de sesión
					</a>
				</Link>
			</div>
		</div>
	)
}

export default AuthCard
