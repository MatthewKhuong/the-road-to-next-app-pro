import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "dummy_stripe_secret_key", {
  typescript: true,
});

export { stripe };
