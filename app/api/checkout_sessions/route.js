import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
  const { price, title, img } = await request.json();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: title,
              images: [img],
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/learning",
      cancel_url: "http://localhost:3000/",
    });
    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (err) {
    return new NextResponse(err, {
      status: 400,
    });
  }
}
