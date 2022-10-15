import ErrorCard from './ErrorCard'
import Favorite from './Favorite'

export default function FavoriteList({favArray}) {

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

    return (
        <div className='w-full flex flex-col gap-y-20 lg:flex-row'>
            {favArray ? renderFav() : <ErrorCard error={'Error al cargar los favoritos'}/>}
        </div>
    )
}
