import {PaymentForm, CreditCard} from 'react-square-web-payments-sdk'
import Toast from "../components/Toast";
import {useState} from "react";



const Payment = () => {

    const [paymentChecked, setPaymentChecked] = useState(false)
    const [errorToast, setErrorToast] = useState(false)
    const [successToast, setSuccessToast] = useState(false)


    const handleSuccessToast = () =>{
        setSuccessToast(false)
    }

    const handleErrorToast = () =>{
        setErrorToast(false)
    }

    return (
        <div>
            <div className={'h-screen flex flex-col items-center justify-center'}>
                {errorToast &&  <Toast message={'Error al realizar el pago'} handleOnClick={handleErrorToast} variant={'error'} color={'red'}/>}
                {successToast && <Toast message={'Pago realizado con éxito'} handleOnClick={handleSuccessToast} variant={'success'} color={'green'}/> }
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
                        console.log('RESPONSE HERE 😀')
                        console.log(response)

                        // @ts-ignore
                        if(response.status === '200'){
                            setPaymentChecked(true)
                            setSuccessToast(true)
                        } else if (response.status == '500'){
                            setPaymentChecked(false)
                            setErrorToast(true)
                        }
                    }}>
                    <CreditCard/>
                </PaymentForm>
            </div>
        </div>
    )
}

export default Payment