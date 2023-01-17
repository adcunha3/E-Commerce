const express = require("express");
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {

    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'], //accept credit cards
            mode: 'payment', //one time payement
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents //Pass value in cents for stripe
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${process.env.CLIENT_URL}`,
            cancel_url: `${process.env.CLIENT_URL}`,
        });

        res.json({url : session.url})

    } catch (err) {
        res.status(400).json({ error : err.message })
    }
})

module.exports = router;