import ErrorCard from './error-card'
import Favorite from './favorite'

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
        <div className='w-full flex flex-col gap-y-10 lg:flex-row lg:justify-start lg:flex-wrap lg:gap-x-10'>
            {favArray ? renderFav() : <ErrorCard error={'Error al cargar los favoritos'}/>}
        </div>
    )
}
