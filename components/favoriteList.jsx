import Favorite from './favorite'

export default function FavoriteList({ favArray }) {

	function renderFav() {
		return favArray.map((fav) => {
			return (
				<Favorite
					key={fav.id}
					id={fav.id}
					name={fav.name}
					image={fav.image}
					url={fav.url}
				/>
			)
		})
	}
// TODO: make an error dialog
	return (
		<div className='mx-auto max-w-2xl py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-5'>
			{favArray ? renderFav(): <p>Error al cargar los favoritos</p>}
		</div>
	)
}
