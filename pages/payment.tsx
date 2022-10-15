import {PaymentForm, CreditCard} from 'react-square-web-payments-sdk'

const Payment = () =>{

    return(
            <>
            <div className={'h-screen'}>
                <PaymentForm
                    applicationId={'sandbox-sq0idb-CHQxCKMOZZF11yX9LjMRLg'}
                    locationId={'LBFRPVGDT4TD7'}
                    cardTokenizeResponseReceived={async (token, buyer) =>{
                        alert(JSON.stringify(token, null, 2))
                    }}>
                    <CreditCard/>
                </PaymentForm>
            </div>
            </>
    )
}

export default Payment