import { useSession } from 'next-auth/react'
import AuthCard from '../components/authenticationCard'
import Image from 'next/image'

export default function Account() {
	const { data: session } = useSession()

	if (session) {
		return (
			<div className='py-5 flex flex-col items-center h-screen'>
				<Image
					alt='user profile picture'
					src={session.user.image}
					height={150}
					width={150}
					className={'rounded-full'}
				/>
				<p className='text-2xl font-semibold mt-5'>{session.user.name}</p>
				<p className='text-lg mt-2'>{session.user.email}</p>				
			</div>
		)
	}

	return <AuthCard />
}
