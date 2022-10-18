type Props = {
    error: string
}

const ErrorCard = ({error}: Props) => {
  return (
    <div className="">
      <p>{error}</p>
    </div>
  )
}

export default ErrorCard