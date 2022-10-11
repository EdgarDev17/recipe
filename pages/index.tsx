import { CategoriesList } from '../components/CategoriesList'
import { useEffect, useState } from 'react'
import Searchbar from '../components/InputBar'
import AuthCard from '../components/authenticationCard'
import { useSession } from 'next-auth/react'
import RecipeList from '../components/RecipesList'

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
						<h2 className='mr-5 w-full text-xl rounded py-5 pl-2 tracking-tight leading-none text-black md:text-5xl lg:text-6xl dark:text-white'>
							{session.user.name}
						</h2>
					</div>
					<Searchbar getQuery={handleSearchBar} />

					{query === '' ? (
						<RecipeList recipeArray={recipesList} />
					) : (
						<RecipeList recipeArray={searchedList} />
					)}

				{/* TODO: MAKE CATEGORIES LIST AND RENDER THEM */}
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
