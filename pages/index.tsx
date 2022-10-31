import { CategoriesList } from '../components/categories-list'
import { useEffect, useState } from 'react'
import Searchbar from '../components/input-bar'
import AuthCard from '../components/authentication-card'
import { useSession, getSession } from 'next-auth/react'
import RecipeList from '../components/recipes-list'

export default function Home() {
	const [recipesList, setRecipesList] = useState([{}])
	const [searchedList, setSearchedList] = useState()
	const [category, setCategory] = useState('main course')
	const [query, setQuery] = useState('')
	const { data: session } = useSession()

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=10`
		)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setRecipesList(data.recipes)
			})
	}, [])

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`
		)
			.then((response) => response.json())
			.then((data) => {
				setSearchedList(data.results)
			})
	}, [query])

	function getCategory(categoryParam) {
		setCategory(categoryParam)
	}

	function handleSearchBar(queryParam) {
		setQuery(queryParam)
	}

	if (session) {
		return (
			<div>
				<div className='w-11/12 h-full mx-auto relative lg:container'>
					<div className='flex flex-col mt-10 mb-7 justify-start items-center content-center'>
						<h1 className='mr-5 w-full text-3xl rounded py-5 pl-2 bg-yellow-400 font-bold tracking-tight leading-none text-black md:text-5xl lg:text-6xl dark:text-white'>
							Recetas
						</h1>
					</div>

					<Searchbar
						getQuery={handleSearchBar}
						placeholder={''}
						label={'Nombre de la receta'}
					/>

					{query === '' ? (
						<RecipeList key={1} recipeArray={recipesList} />
					) : (
						<RecipeList key={2} recipeArray={searchedList} />
					)}
				</div>
			</div>
		)
	} else {
		return (
			<div>
				<AuthCard />
			</div>
		)
	}
}

export async function getServerSideProps({ req }) {
	const session = await getSession({ req })

	if (!session) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		}
	}

	return {
		props: {
			session,
		},
	}
}
