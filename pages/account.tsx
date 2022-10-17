import {useSession} from 'next-auth/react'
import LoginButton from "../components/login_btn";
import AuthCard from '../components/authenticationCard'
import Image from 'next/image'

export default function Account() {
    const {data: session} = useSession()
    console.log(session)
    if (session) {
        return (
            <div className={'w-11/12 mx-auto h-screen'}>
                <div className='py-5 flex flex-col items-center'>
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
                <div className='my-5'>
                    <p className='my-2 font-bold'>Plan contratado:</p>
                    <span
                        className=" bg-gray-200 text-gray-800 px-3 py-1 rounded">Premium</span>

                </div>
                <div className='my-10'>
                    <p className='my-4 font-bold'>Lista de favoritos</p>
                    <span
                        className=" bg-gray-200 text-gray-800 px-3 py-1 rounded">3 de 300</span>
                </div>

                <div className={'my-10'}>
                    <p className='my-4 font-bold'>Inicio de sesion con:</p>
                    <span
                        className=" bg-gray-200 text-gray-800 px-3 py-1 rounded">Google</span>
                </div>

                <div className={'mt-10 flex justify-center'}>
                    <LoginButton/>
                </div>
            </div>
        )
    }

    return <AuthCard/>
}
