import { getSession } from 'next-auth/react'
import LoginButton from '../components/login-btn'
import Image from 'next/image'

const Login = () => {
	return (
		<>
			<div className='sm:flex sm:items-center sm:justify-center h-screen bg-gradient-to-t from-orange-300 to-yellow-200'>
				<div className='rounded-xl'>
					<Image
						alt='this is the image for the login page'
						src='/food.webp'
						width={500}
						height={370}
						className='rounded-xl'
					/>
				</div>
				<div className='my-10  sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-2/4 gap-y-5  rounded-xl sm:max-w-xl'>
					<h1 className='font-semibold text-2xl text-center'>
						¡Bienvenido a tu lugar de comida favorito!
					</h1>

					<p className='font-normal text-center my-5'>
						Para poder disfrutar de miles de recetas deliciosas,
						debes iniciar sesión! Puedes hacerlo utilizando tu
						cuenta de Google
					</p>

					<div className='flex justify-center items-center'>
						<LoginButton />
					</div>
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps({req}){
	const session = await getSession({req})

	if(session){
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {}
	}
}

export default Login
