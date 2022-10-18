import AuthCard from '../components/authentication-card'
import {getSession} from 'next-auth/react'
import {GetServerSideProps} from 'next'
import client from '../lib/prisma'
import FavoriteList from "../components/favorite-list";

export default function Favorites({user, favorites}) {
    
    if (user) {
        return (
            <div className={'lg:w-11/12 lg:mx-auto'}>
                <h2 className='ml-5 text-3xl lg:text-6xl font-bold dark:text-white lg:ml-10'>
                    Tus favoritos
                </h2>

                <div className={'mt-10'}>
                    <FavoriteList key={1} favArray={favorites}/>
                </div>
            </div>
        )
    }

    return <AuthCard/>
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
    const session = await getSession({req})

    const favorites = await client.favorite.findMany({
        where: {
            user: {
                id: session.user.id,
            },
        },
    })

    return {
        props: {
            user: session.user,
            favorites,
        },
    }
}
