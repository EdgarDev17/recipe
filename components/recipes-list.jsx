import Recipe from './recipe-item'

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
		<div className='flex justify-center  flex-col gap-y-7 py-16  lg:flex-row lg:gap-x-5 lg:flex-wrap'>
			{recipeArray ? renderRecipe(): <p>Error al cargar las recetas</p>}
			
		</div>
	)
}
