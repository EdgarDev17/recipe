import DOMPurify from 'isomorphic-dompurify'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import IngredientData from '../../components/ingredient-list'
import { PopupModel } from '../../components/popup-modal'
import client from '../../lib/prisma'
import { useRouter } from 'next/router'

const Recipe = ({ data, isOnFavorite, favoriteId }) => {
	const [recipe, setRecipe] = useState({
		name: data.recipe.title,
		image: data.recipe.image,
		url: data.recipe.id,
	})

	const succesModal = (
		<PopupModel
			message='Receta agregada a tu lista'
			variant='success'
			mainBtnText='Hecho'
			oneButton={true}
			handleAgreedBtn={() => setShowModal(false)}
		/>
	)
	const errorModal = (
		<PopupModel
			message='Quieres eliminar la receta de tu lista de favoritos?'
			variant='error'
			mainBtnText='Hecho'
			secondaryBtnText='Cancelar'
			oneButton={false}
			handleAgreedBtn={deleteRecipe}
			handleOnCancel={() => setShowModal(false)}
		/>
	)

	const [isRecipeOnFavorite, setIsRecipeOnFavorite] = useState(false)
	const { data: session } = useSession()
	const [showModal, setShowModal] = useState(false)
	const [showErrorModal, setShowErrorModal] = useState(false)

	const router = useRouter()
	const refreshData = () => {
		router.replace(router.asPath)
	}

	useEffect(() => {
		setIsRecipeOnFavorite(isOnFavorite)
	}, [isOnFavorite, isRecipeOnFavorite])

	const styles = {
		list_container: `[&>ol]:list-decimal [&>ol]:text-justify [&>ol]:pl-8 [&>ol]:mt-2 [&>ol]:mb-4 [&>ol]:text-gray-900 [&>ol]:text-sm [&>ol]:leading-6  
			[&>ol]:text-left  [&>ol]:list-disc`,

		list_item: `[&>ol>li]:border [&>ol>li]:px-2 [&>ol>li]:py-5 [&>ol>li]:my-5 [&>ol>li]:rounded-lg [&>ol>li]:px-5 [&>ol>li]:py-5 
			[&>ol>li]:my-5 [&>ol>li]:rounded-lg [&>ol>li]:bg-gray-50 [&>ol>li]:shadow [&>ol>li]:text-gray-900 [
			&>ol>li]:text-sm [&>ol>li]:border [&>ol>li]:text-left`,
	}

	function getIngredients(ingredients) {
		const INGREDIENT_PATH = 'https://spoonacular.com/cdn/ingredients_100x100/'
		
		return ingredients.map((ingredient) => {
			return (
				<IngredientData
					key={ingredient.id}
					image={INGREDIENT_PATH + ingredient.image}
					ingredientName={ingredient.name}
					amount={ingredient.amount}
					unit={ingredient.unit}
					instructions={''}
				/>
			)
		})
	}

	function cleanInnerHtml(innerHtmlData) {
		return DOMPurify.sanitize(innerHtmlData)
	}

	async function submitRecipe() {
		try {
			// @ts-ignore
			const userId = session.user.id
			const body = { recipe, userId }
			await fetch('/api/recipe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			})
			setShowModal(true)
			refreshData()
		} catch (err) {
			console.log(err)
		}
	}

	async function deleteRecipe() {
		try {
			// @ts-ignore
			const id = favoriteId
			const body = { id }
			await fetch('/api/recipe', {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			})
			refreshData()
			setShowErrorModal(false)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='w-full'>
			<div>{showModal && succesModal}</div>
			<div>{showErrorModal && errorModal}</div>
			<Image
				src={data.recipe.image}
				alt={'recipe preview'}
				width={500}
				height={250}
			/>

			<div className='w-11/12 mx-auto flex flex-col '>
				<p className='text-3xl mt-5 text-center font-bold'>
					{data.recipe.title}
				</p>

				<p className='text-lg mt-5 text-center text-gray-500'>{`Escrita por ${data.recipe.sourceName}`}</p>

				{isRecipeOnFavorite ? (
					<button
						onClick={() => setShowErrorModal(true)}
						className='border my-5 text-white bg-red-500 py-5 px-5 rounded-lg'
					>
						Eliminar de favoritos
					</button>
				) : (
					<button
						onClick={() => submitRecipe()}
						className='border my-5 text-white bg-green-500 py-5 px-5 rounded-lg'
					>
						Añadir a favoritos
					</button>
				)}

				<div>
					{getIngredients(data.recipe.extendedIngredients)}
				</div>

				<p className='text-xl font-semibold mt-10 mb-5'>Instrucciones </p>

				<div
					className={styles.list_container + styles.list_item + ' text-justify'}
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

	const favorite = await client.favorite.findMany({
		where: {
			url: id,
		},
	})

	console.log('this is the favorite', favorite)

	return {
		props: {
			data: { recipe },
			isOnFavorite: favorite.length > 0,
			favoriteId: favorite.length > 0 ? favorite[0].id : null,
		},
	}
}

export default Recipe
