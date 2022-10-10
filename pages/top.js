import Searchbar from '../components/inputBar'
import { useSession } from 'next-auth/react'
import AuthCard from './../components/authenticationCard'
import CardList from '../components/CardList'

export default function Top() {
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
