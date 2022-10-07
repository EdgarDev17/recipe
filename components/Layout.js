import { MenuBar } from './MenuBar'

export default function Layout({ children }) {
	return (
		<>
			<div>{children}</div>
			<div className='sticky bottom-0 left-0 right-0'>
				<MenuBar />
			</div>
		</>
	)
}
