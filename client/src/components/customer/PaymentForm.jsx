import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { emptyCart } from '../../actions/cartActions.jsx';

import STRIPE_CONSTS from '../../../../config.js';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = (data) => {
  alert('Payment Successful');
};

const errorPayment = (data) => {
  alert('Payment Error');
};

const onToken = (amount, description, id, cb) => token =>
  axios.post(
    `/api/customers/${id}/chargeCard`,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount),
    },
  )
    .then(successPayment)
    .catch(errorPayment)
    .then(res => {
      window.location.reload();
    });

const PaymentForm = ({ name, description, amount, id, emptyCart }) =>
  (<StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description, id, emptyCart)}
    currency={CURRENCY}
    stripeKey={STRIPE_CONSTS.STRIPE_PUBLISHABLE}
  />);

const mapDispatchToProps = {
  emptyCart,
};

export default connect(null, mapDispatchToProps)(PaymentForm);
