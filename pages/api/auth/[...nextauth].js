import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	secret: process.env.JWT_SECRET,

	callbacks: {
		session: async ({ session, token }) => {
			// Send properties to the client, like an access_token and user id from a provider.
			if (session?.user) {
				session.user.id = token.sub
			}
			return session
		},
		redirect: async (url, _baseUrl) => {
			if (url === '/user') {
				return Promise.resolve('/')
			}
			return Promise.resolve('/')
		},
	},
	session: {
		strategy: 'jwt',
	},
})
