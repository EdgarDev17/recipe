import AuthCard from '../components/authenticationCard'
import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import client from '../lib/prisma'
import FavoriteList from './../components/favoriteList';

export default function Favorites({ user, favorites }) {
	if (user) {
		return (
			<div>
				<h2 className='text-4xl font-bold dark:text-white'>
					Tus favoritos
				</h2>

				<FavoriteList key={1} favArray={favorites}/>
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
