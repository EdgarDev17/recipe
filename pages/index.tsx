import { CategoriesList } from '../components/categories-list'
import { useEffect, useState } from 'react'
import Searchbar from '../components/input-bar'
import AuthCard from '../components/authentication-card'
import { useSession, getSession } from 'next-auth/react'
import RecipeList from '../components/recipes-list'
import { useRecipe } from '../hooks/useRecipe'

export default function Home() {
	const { data: session } = useSession()
	const { recipesList, handleSearch, queryRecipe, searchedList } = useRecipe()

	if (session) {
		return (
			<div>
				<div className='w-11/12 h-full mx-auto relative md:max-w-7xl md:container'>
					<div className='mt-10 mb-7 '>
						<h1 className='w-full text-3xl rounded py-5 bg-yellow-500 md:bg-white pl-3 md:pl-0 bg-gradient-to-r font-bold tracking-tight leading-none text-black md:text-5xl lg:text-6xl '>
							Recetas
						</h1>
					</div>

					<Searchbar
						getQuery={handleSearch}
						placeholder={''}
						label={'Nombre de la receta'}
					/>

					{queryRecipe === '' ? (
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
