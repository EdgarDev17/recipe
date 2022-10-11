import client from '../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method == 'POST') {
		const { recipe, userId } = req.body
		const favorite = await client.favorite.create({
			data: {
				name: recipe.name,
				image: recipe.image,
				url: String(recipe.url),
				user: {
					connect: {
						id: userId,
					},
				},
			},
		})
		res.json(favorite)
	}

	if (req.method == 'DELETE') {
		const { id } = req.body
		const deleteFavorite = await client.favorite.delete({
			where: {
				id: id,
			},
		})

        res.json(deleteFavorite)
	}
}
