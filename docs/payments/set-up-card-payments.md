---
title: Set up card payments
description: Connect Cashflows or DNA Payments, work through the checklist before taking real money, and switch on Apple Pay and Google Pay.
---

# Set up card payments

Customers pay by card through a payment provider. Raffinity works with **Cashflows** and **DNA Payments**. You can switch on one, or both, and customers will see every one that is switched on. Raffinity can help you with this, and it is mostly a case of adding your details here.

## Before you start

- You need an account with your provider. They give you test details first, and live details once your account is open.
- You need to be an admin.
- Do not take real money until the checklist on each provider is complete. Your site will not let you switch to live until it is.

## Open the settings

Open **Settings**, then **Payments**. The page is called **Payment Settings**, with a block for each provider.

![The Payment Settings page](/screenshots/payment-settings.png)

## Set up a provider

In the block for Cashflows or DNA Payments:

1. Add your **test** details first.
   - **Cashflows:** **Test Configuration ID** and **Test API key**.
   - **DNA Payments:** **Test client ID**, **Test client secret** and **Test terminal ID**.
2. Choose **How the payment form is shown**: **Card form on our checkout page (recommended)**, or send the customer to the provider's own page.
3. Set the **Name customers see** if you want something other than the default, such as "Card".
4. Copy the **Webhook address** shown and give it to your provider. It is how they tell your site that a payment has gone through.
5. Click **Save Settings**, then **Test connection**. It makes one harmless call and creates nothing. You can use it a few times an hour.
6. Leave **Test mode (no real money)** switched on while you test.
7. Switch on **Offer Cashflows at checkout** (or **Offer DNA Payments at checkout**). Customers see the option while it is on and has details.

## Work through the checklist

Under **Before this can take real payments**, each provider lists what must be done:

- **Test (sandbox) credentials saved.**
- **Connection test passed.** This one is optional.
- **A test payment was completed.** Make a test purchase with one of the provider's test cards while in test mode.
- **A test refund was sent back to the card.** Cancel and refund the test order from the admin. See [Cancel and refund an order](/orders-and-refunds/cancel-and-refund).
- **A notification from the provider has reached us.** Give the provider the webhook address, then make a test payment.
- **Live credentials saved.** From the provider, once your live account is open.

Each item shows **To do** or its status as you complete it.

## Go live

1. Add your **live** details: for Cashflows, **Live Configuration ID** and **Live API key**. For DNA, **Live client ID**, **Live client secret** and **Live terminal ID**.
2. When the checklist is complete, switch off **Test mode (no real money)**.
3. Click **Save Settings**.

If you try to switch to live before the checklist is complete, your site refuses.

## Apple Pay and Google Pay

These are available with DNA Payments. They show as buttons above the card form, for customers whose device supports them.

1. In your DNA merchant portal, switch the method on first (**Settings**, then **Online payment methods**).
2. Then in **Payment Settings**, open **Apple Pay and Google Pay (DNA Payments)** and switch on **Offer Google Pay**, **Offer Apple Pay**, or both.
3. For Apple Pay, paste the **Verification file contents** Apple gives you.

These are new. Please check with Raffinity before you switch them on for real customers.

## Development Testing Payments

The **Development Testing Payments** switch simulates payments with no real money. It is for test sites only and should never be on for a live site. Ask Raffinity to confirm it is off before you launch. See [Before you go live](/getting-started/before-you-go-live).

## What your customers will see

The payment options you switched on, with the names you set, at checkout. They pay with a card, and Apple Pay or Google Pay if you offer them. The card form gives them 10 minutes to pay.

## Tips

- Complete the whole test, including a test refund, well before launch.
- Keep your live details private. Only admins can see this page.
- Until a provider is switched on, refunds that would go back to a card go to the customer's Cash Wallet instead.

## Common questions

**Can I use both providers?**
Yes. Customers see every provider that is switched on.

**Where do I find my details?**
In your provider's portal. Ask your provider, or Raffinity, if you are not sure.

**Why can I not switch to live?**
The checklist is not complete. Look for items marked **To do**.

## Related guides

- [Check card payments and refunds](/payments/check-card-payments)
- [Before you go live](/getting-started/before-you-go-live)
- [Cancel and refund an order](/orders-and-refunds/cancel-and-refund)
- [Wallets and withdrawals](/wallets-and-withdrawals/)
