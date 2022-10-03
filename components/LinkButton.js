import Link from 'next/link'

export const LinkButton = ({label, goTo}) => {
	return (
		<Link href={goTo}>
			<a className=''>{label}</a>
		</Link>
	)
}
