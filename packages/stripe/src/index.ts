import Stripe from "stripe";
import Strpe from "stripe";

if (!process.env.STRIPE_SECRET_API_KEY)
  throw new Error(
    `Please provide a STRIPE_SECRET_API_KEY environment variable!`
  );

const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY, {
  // @ts-ignore The Stripe docs state that null denotes the Stripe account's default version and to use ts-ignore
  apiVersion: null,
  appInfo: {
    name: "Substore",
    partner_id: "pp_partner_IsY1mtoxV00gSQ",
  },
});

export default stripe;