import { useEffect, useState } from 'react'

export function useRecipe() {
	const [recipesList, setRecipesList] = useState([{}])
	const [queryRecipe, setQueryRecipe] = useState('')
	const [searchedList, setSearchedList] = useState()

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
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=${queryRecipe}`
		)
			.then((response) => response.json())
			.then((data) => {
				setSearchedList(data.results)
			})
	}, [queryRecipe])

	function handleSearch(queryParam) {
		setQueryRecipe(queryParam)
	}

	return {
		recipesList,
        searchedList,
        queryRecipe,
        handleSearch,
	}
}
