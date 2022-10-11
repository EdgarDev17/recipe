
import client from '../../../lib/prisma'

export default async function handle(req, res) {
    const { recipe, userId } = req.body
    const favorite = await client.favorite.create({
        data: {
            name: recipe.name,
            image: recipe.image,
            url: String(recipe.url),
            user: {
                connect:{
                    id: userId
                }
            }
        }
    })

    res.json(favorite)
}