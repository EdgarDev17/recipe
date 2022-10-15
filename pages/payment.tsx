import {PaymentForm, CreditCard} from 'react-square-web-payments-sdk'

const Payment = () => {

//        TODO: I need to get the credentials from env file
    return (
        <div>
            <div className={'h-screen'}>
                <PaymentForm
                    applicationId={process.env.NEXT_PUBLIC_APP_ID}
                    locationId={process.env.NEXT_PUBLIC_LOCATION_ID}
                    cardTokenizeResponseReceived={async (token, buyer) => {
                        const response = await fetch('/api/pay', {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_SQUARE_ACCESS_TOKEN,
                            },
                            body: JSON.stringify({
                                sourceId: token.token,
                                locationId: process.env.NEXT_PUBLIC_LOCATION_ID
                            })
                        })
                        console.log(response.json())
                    }}>
                    <CreditCard/>
                </PaymentForm>
            </div>
        </div>
    )
}

export default Payment