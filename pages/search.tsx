import Searchbar from '../components/input-bar'
import { useSession } from 'next-auth/react'
import AuthCard from '../components/authentication-card'
import CardList from '../components/recipes-list'

export default function Search() {
	const { data: session } = useSession()

	if (session) {
		return (
			<div>
				<h1>This is de Top page</h1>
			</div>
		)
	}

	return <AuthCard />
}
