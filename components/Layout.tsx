import { MenuBar } from './MenuBar'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
	const router = useRouter()

	if (router.pathname != '/login') {
		return (
			<>
				<div>{children}</div>
				<div className='sticky bottom-0 left-0 right-0'>
					<MenuBar />
				</div>
			</>
		)
	} else {
		return <>{children}</>
	}
}
