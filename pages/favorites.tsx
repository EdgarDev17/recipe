import AuthCard from '../components/authentication-card'
import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import client from '../lib/prisma'
import FavoriteList from '../components/favorite-list'

export default function Favorites({ user, favorites }) {
	if (user) {
		return (
			<div className={'w-11/12 max-w-7xl  h-screen mx-auto'}>
				<h2 className='pt-10 text-3xl lg:text-6xl font-bold'>
					Tus favoritos
				</h2>

				<div className={'mt-10 md:mt-20'}>
					<FavoriteList key={1} favArray={favorites} />
				</div>
			</div>
		)
	}

	return <AuthCard />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const session = await getSession({ req })

	const favorites = await client.favorite.findMany({
		where: {
			user: {
				// @ts-ignore
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
