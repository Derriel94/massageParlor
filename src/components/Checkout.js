import React from 'react'
import {PaymentElement} from '@stripe/react-stripe-js'
import {Elements} from '@stripe/react-stripe-js';

function Checkout( {stripePromise, options} ) {
	return (
		<div>
		 <Elements stripe={stripePromise} options={options}>
			<form>
      			<PaymentElement />
      			<button>Submit</button>
    		</form>
    	</Elements>
		</div>
	)
}

export default Checkout