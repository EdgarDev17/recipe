import { MenuBar } from './MenuBar'

export default function Layout({ children }) {
	return (
		<>
			<main>{children}</main>

			<div className='fixed bottom-0 left-0 right-0'>
				<MenuBar />
			</div>
		</>
	)
}
