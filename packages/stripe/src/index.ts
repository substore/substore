import{ Stripe } from "stripe";

const stripe_key = process.env.STRIPE_API_KEY;

const stripe = stripe_key
  ? new Stripe(stripe_key, {
      apiVersion: '2022-11-15',
      appInfo: {
        name: "Substore",
        partner_id: "pp_partner_IsY1mtoxV00gSQ"
      }
    })
  : null;

export default stripe;
