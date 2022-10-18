import { Client, Environment } from 'square'
import { randomUUID } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'

// @ts-ignore
BigInt.prototype.toJSON = function () {
	return this.toString()
}

// First I need to inicialze my Client, this recieve 2 params, accessToken and environment
const client = new Client({
	accessToken: process.env.NEXT_PUBLIC_SQUARE_ACCESS_TOKEN,
	environment: Environment.Sandbox,
})

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method == 'POST') {
		const { result, statusCode } = await client.paymentsApi.createPayment({
			idempotencyKey: randomUUID(),
			sourceId: req.body.sourceId,
			locationId: req.body.locationId,
			amountMoney: {
				// @ts-ignore
				amount: 5,
				currency: 'USD',
			},
		})

		console.log(result)
		res.status(200).json(result)
	} else {
		res.status(500).send({ error: 'error' })
	}
}
