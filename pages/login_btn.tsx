import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className="bg-red-500 px-5 py-3 text-white rounded-lg" onClick={() => signIn()}>Iniciar sesión con Google</button>
    </>
  )
}