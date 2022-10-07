import DOMPurify from 'isomorphic-dompurify'
import Image from 'next/image'
import IngredientData from '../../components/ingredientList'
const Recipe = ({ data }) => {

	const styles ={
		list_container: '[&>ol]:list-decimal [&>ol]:mx-auto [&>ol]:text-justify ',
		list_item: '[&>ol>li]:border [&>ol>li]:px-2 [&>ol>li]:py-5 [&>ol>li]:my-5 [&>ol>li]:rounded-lg [&>ol>li]:px-5 ' 
	}

	function getCurrentIngredient(ingredients) {
		const INGREDIENT_PATH =
			'https://spoonacular.com/cdn/ingredients_100x100/'
		return ingredients.map((ingredient) => {
			return (
				<IngredientData
					key={ingredient.id}
					image={INGREDIENT_PATH + ingredient.image}
					ingredientName={ingredient.name}
					amount={ingredient.amount}
					unit={ingredient.unit}
				/>
			)
		})
	}

	function cleanInnerHtml(innerHtmlData) {
		return DOMPurify.sanitize(innerHtmlData)
	}

	return (
		<div className='w-full'>
			<Image
				src={data.recipe.image}
				alt={'recipe preview'}
				width={500}
				height={250}
			/>

			<div className='w-4/5 mx-auto'>
				<p className='text-3xl text-center font-semibold dark:text-white'>
					{data.recipe.title}
				</p>
				<p className='text-xl text-center text-slate-700 dark:text-white'>{`Por ${data.recipe.sourceName}`}</p>
				<div>
					{getCurrentIngredient(data.recipe.extendedIngredients)}
				</div>
				
				<p className='text-xl font-semibold'>Instrucciones: </p>
				<div
					className={styles.list_container + styles.list_item}
					dangerouslySetInnerHTML={{
						__html: `${cleanInnerHtml(data.recipe.instructions)}`,
					}}
				></div>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const { params } = context
	const { id } = params

	let response = await fetch(
		`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
	)
	let recipe = await response.json()
	console.log(recipe)

	return {
		props: {
			data: { recipe },
		},
	}
}

export default Recipe
