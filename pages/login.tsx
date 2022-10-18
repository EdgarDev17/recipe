import { useSession, signIn, signOut } from 'next-auth/react'
import LoginButton from '../components/login-btn'
import Image from 'next/image'

const Login = () => {
	const { data: session } = useSession()
		return (
			<>
				{/* bg-gradient-to-t from-orange-500 to-yellow-200 */}
				<div className=' h-screen bg-gradient-to-t from-orange-300 to-yellow-200'>
					<Image
						alt='this is the image for the login page'
						src='/food.webp'
						width={500}
						height={400}
					/>
					<div className='my-10'>
						<h1 className='font-semibold text-2xl text-center'>
							¡Bienvenido a tu lugar de comida favorito!	
						</h1>

						<p className='font-normal text-center my-5'>
							Para poder disfrutar de miles de recetas deliciosas,
							debes iniciar sesión! Puedes hacerlos utilizando tu cuenta de Google
						</p>
					</div>

					<div className='flex justify-center items-center'>
						<LoginButton />
					</div>
				</div>
			</>
		)
}

export default Login
