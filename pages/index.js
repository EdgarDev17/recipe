import CardList from '../components/CardList'
import { CategoriesList } from '../components/CategoriesList'
import { useEffect, useState } from 'react'

export default function Home() {

	const [recipesList, setRecipesList] = useState([{}])
	const [category, setCategory] = useState('main course')

	useEffect(()=>{
		fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=10`)
		.then(response => response.json())
		.then(data =>{
			setRecipesList(data.recipes)
		})
	},[] )

	function getCategory (categoryParam){
		setCategory(categoryParam)
	}

	return (
		<div>
			<div className='w-11/12 h-screen mx-auto relative lg:container'>
				<div className='flex mt-10 justify-start items-center content-center'>
					<h1 className='mr-5 w-full text-3xl rounded py-5 pl-2 bg-yellow-400 font-bold tracking-tight leading-none text-black md:text-5xl lg:text-6xl dark:text-white'>
						Recetas
					</h1>
				</div>

				<CategoriesList getCategory = {getCategory}/>

				<CardList products={recipesList}/>

			</div>
		</div>
	)
}
