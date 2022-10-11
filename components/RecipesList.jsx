import Recipe from './Recipe'
import { useState } from 'react'

export default function RecipeList({ recipeArray }) {

	function renderRecipe() {
		return recipeArray.map((recipe) => {
			return (
				<Recipe
					key={recipe.id}
					id={recipe.id}
					title={recipe.title}
					image={recipe.image}
					sourceName={recipe.sourceName}
				/>
			)
		})
	}

	return (
		<div className='mx-auto max-w-2xl py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-5'>
			{recipeArray ? renderRecipe(): <p>Error al cargar las recetas</p>}
		</div>
	)
}
