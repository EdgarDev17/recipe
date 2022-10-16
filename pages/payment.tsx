import {PaymentForm, CreditCard} from 'react-square-web-payments-sdk'
import Toast from "../components/Toast";
import {useState} from "react";

const Payment = () => {
    const [paymentChecked, setPaymentChecked] = useState(false)
    const [showToast, setShowToast] = useState(false)

    const handleToast= () =>{
        setShowToast(false)
    }

    return (
        <div>
            <div className={'h-screen'}>
                {showToast && <Toast message={'Pago realizado con éxito'} handleOnClick={handleToast}/>}
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
                        if(response.statusText === 'OK'){
                            setPaymentChecked(true)
                            setShowToast(true)
                        }
                    }}>
                    <CreditCard/>
                </PaymentForm>
            </div>
        </div>
    )
}

export default Payment