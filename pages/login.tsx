import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
	const { data: session } = useSession()

	if (!session) {
		return (
			<>
				<div>
					<h1 className='font-semibold text-2xl'>¡Bienvenido a tu lugar de comida favorito! 🥞</h1>
					<p className='font-normal '>Para poder disfrutar de miles de recetas deliciosas, debes iniciar sesión!</p>
                    <button className='bg-red-500 text-white px-5 py-2 rounded-md my-5' onClick={()=> signIn()} >Iniciar sesesion con Google</button>
				</div>
			</>
		)
	} else {
		return (
			<>
				<div>
					<h1>Hey! {session.user.name} how you doing?</h1>
				</div>
			</>
		)
	}
}

export default Login
