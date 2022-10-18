import Recipe from './recipe'

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
		<div className='flex justify-center flex-col gap-y-10 mx-auto max-w-2xl py-16 sm:py-24 sm:px-6 lg:flex-row lg:gap-x-5 lg:flex-wrap lg:max-w-7xl lg:px-5'>
			{recipeArray ? renderRecipe(): <p>Error al cargar las recetas</p>}
		</div>
	)
}
