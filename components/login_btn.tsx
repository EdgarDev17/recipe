import { useSession, signIn, signOut } from 'next-auth/react'
import { IoLogoGoogle } from 'react-icons/io5'

export default function LoginButton() {
	const { data: session } = useSession()
	if (session) {
		return (
			<>
				<button
					className='bg-black text-white  px-5 py-2'
					onClick={() => signOut()}
				>
					Cerrar sesión
				</button>
			</>
		)
	}
	return (
		<>
			<button
				className='bg-red-500 px-7 py-5 flex items-center text-white rounded-lg'
				onClick={() => signIn('google')}
			>
				<IoLogoGoogle size={'1.5em'} />
				<p className='mx-5'>Iniciar sesión con Google</p>
			</button>
		</>
	)
}
