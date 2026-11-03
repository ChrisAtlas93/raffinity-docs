---
title: Create promo codes
description: Create promo codes for a percentage off, an amount off or free tickets, apply an offer automatically, and see how a code is performing.
---

# Create promo codes

A promo code gives customers a discount. It can take a percentage off, take an amount off, or give free tickets. You can also make a code apply automatically so customers do not have to type anything. This guide covers creating a code and checking how it is doing.

## Before you start

- You need to be an admin. A moderator needs the switch for creating and editing promo codes, which is off by default.
- Decide what the code gives, who can use it and how often, and when it runs.

## See your codes

Open **Marketing**, then **Promo Codes**. At the top, four cards show how many codes are **Working now**, how many are **Expiring soon**, how many times codes were **Used this month**, and the **Discount given this month**. Use the tabs to filter: **All**, **Active**, **Scheduled**, **Expiring soon**, **Expired**, **Used up** and **Inactive**.

![The Promo Codes list](/screenshots/promo-codes-list.png)

## Create a code

1. Click **New promo code**.
2. Under **Code**:
   - **Code.** Four to twenty letters and numbers, shown in capitals. Click **Generate** for a random one. It cannot be changed once created.
   - **Active.** Off keeps a code ready without launching it.
   - **Description (only you see this)** and **Campaign**, an optional label to group codes such as "Black Friday".
   - **Terms shown to the customer.** Shown when the code is applied, for example "One use per customer."
3. Under **What it gives**, choose the **Discount type**:
   - **Percentage off.** Set **Percentage off (%)** and an optional **Maximum discount (£)** per order.
   - **Fixed amount off (£).** Set **Amount off (£)**.
   - **Free tickets.** Set how many tickets a customer buys, how many they get free, and the most free tickets on one order.
4. Under **Who can use it, and how often**:
   - **Uses per customer.** Blank for no limit. 1 means once per customer.
   - **Total uses.** Blank for no limit. Orders waiting to be paid hold a use for a while.
   - **Minimum spend (£)** and **Minimum tickets**.
   - **New customers only.** Only customers who have never paid for an order.
   - **Allow on competitions already on sale.** Off means the code does not apply to a competition that is already on a sale price.
   - **Apply automatically.** See [Apply an offer automatically](#apply-an-offer-automatically).
5. Under **Schedule**, set **Valid from** and **Valid until**. Leave a date blank for "straight away" or "never expires".
6. Under **Where it works**, choose the **Scope**: **All competitions (optionally leaving some out)** or **Specific competitions only**, then pick the competitions.
7. Click **Create**.

![The Create Promo Code form](/screenshots/promo-code-create.png)

## Apply an offer automatically

Switch on **Apply automatically** and the code applies to any qualifying basket with no code to type. The customer must be signed in. If they also type a code, the bigger saving wins, never both. Use it for offers such as "10% off your first order", together with **New customers only**.

## Check how a code is doing

Click a code, then **View**. The page shows:

- **Usage** cards: total uses, card money spent after the discount, Site Credit used, discount given and free tickets awarded. Switch between **All time**, **Last 7 days**, **Last 30 days** and a custom range.
- **Details**: the code, status, what it gives, limits, scope and terms.
- **Usage history**: who used it, on which order and competition, the discount, free tickets and date. **Export CSV** downloads it.

At the top you can **Edit**, **Deactivate** (or **Activate**) and **Test on a basket**, which lets you try the code on a basket.

![A promo code's usage page](/screenshots/promo-code-view.png)

In the list, each code has a menu with actions such as deactivating it or duplicating it with a new code. A code that has never been used can be deleted.

## How codes combine with other offers

- A promo code cannot be used on tickets at an Early Bird price.
- It cannot be combined with a Multibuy price unless **Allow promo codes on top** is on for that competition.
- On a competition with a sale price, it only works if **Allow on competitions already on sale** is on for the code.

See [Set up sale, Early Bird and Multibuy prices](/offers-and-promotions/sale-early-bird-multibuy).

## What your customers will see

They type the code at the basket or checkout, see the terms and the saving, and pay less. A link that ends with `?promo=YOURCODE` remembers the code and applies it for them. You can add a promo code to a tracked link. See [Marketing and tracking](/marketing-and-tracking/).

If a code cannot be used, they see a plain message. For example, that it cannot be used at the Early Bird price.

## Tips

- Give each campaign its own code so you can see what worked.
- Use **Uses per customer** to stop one person using a code again and again.
- Check the discount given on the list's cards each month.

## Common questions

**Can I change a code's name?**
No. The code cannot be changed once created. Make a new one.

**Why does my code say it is not valid?**
Check its dates, whether it is **Active**, its scope, and any minimum spend or ticket count.

**Does a refund give the code back?**
Cancelling and refunding an order gives the promo use back. Refunding an order but keeping its entries does not. See [Orders and refunds](/orders-and-refunds/).

## Related guides

- [Set up sale, Early Bird and Multibuy prices](/offers-and-promotions/sale-early-bird-multibuy)
- [Show a popup](/offers-and-promotions/popups)
- [Orders and refunds](/orders-and-refunds/)
- [Marketing and tracking](/marketing-and-tracking/)
