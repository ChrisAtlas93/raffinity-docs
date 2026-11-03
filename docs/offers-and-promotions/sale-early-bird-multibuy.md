---
title: Set up sale, Early Bird and Multibuy prices
description: Put a competition on sale, reward early buyers with Early Bird tiers, and give bigger discounts for buying more tickets with Multibuy, and see how they work together.
---

# Set up sale, Early Bird and Multibuy prices

There are three ways to lower the price of a competition's tickets. A **sale price** is a lower price for a time. **Early Bird** rewards customers who enter early. **Multibuy** rewards customers who buy more tickets. You set all three on the competition itself. This guide goes deeper than the overview in [Create a competition](/competitions/create-a-competition#add-offers-to-the-price).

## Before you start

- Open the competition and go to the **Tickets & pricing** tab. The ticket price must already be filled in.
- You can use one, two or all three offers on the same competition.
- You need to be an admin. A moderator needs the switch for creating and editing competitions.

## Put a competition on sale

A sale lowers the ticket price for a set time.

1. Under **Sale Pricing**, switch on **Enable sale pricing**.
2. Type the **Sale price**. It must be less than the standard ticket price.
3. Optionally set **Sale starts at**. Leave it blank to start as soon as you save.
4. Optionally set **Sale ends at**. Leave it blank for no automatic end.
5. Optionally set **Stop sale at % sold**. For example, 75 ends the sale automatically when 75% of the tickets have sold.
6. Click **Save changes**.

![The Sale Pricing section](/screenshots/sale-pricing.png)

A status line shows where the sale stands, for example that it is active, scheduled, ended, or stopped because the sold threshold was reached.

## Reward early buyers with Early Bird

Early Bird gives a cheaper ticket to customers who enter early, in up to three tiers that run one after another.

1. Under **Early Bird pricing**, switch on **Enable Early Bird pricing**.
2. Choose the **Discount type (every tier)**: **Percentage off the ticket price** or **Fixed amount off each ticket**.
3. In the first tier, set the **Discount**. Then say when the tier ends, with **Ends at** (a date and time), **Ends after this many tickets sold**, or both.
4. Click **Add a tier** for the second and third.
5. Check the **Preview** to see each tier's price.

![The Early Bird pricing section](/screenshots/early-bird-pricing.png)

The rules:

- The first tier runs first. Each tier must cost more than the one before it (a smaller discount) and end later.
- Each tier needs an end, either a time or a number of tickets.
- The discount is taken off the regular ticket price.
- When the end is a number of tickets sold, it counts paid tickets, so it can go slightly over.

## Reward bigger baskets with Multibuy

Multibuy makes tickets cheaper when a customer buys more.

1. Under **Multibuy discounts**, switch on **Enable multibuy discounts**.
2. Choose the **Pricing mode**:
   - **Percentage discount.** Each bracket takes a percentage off the current selling price.
   - **Fixed ticket price.** Each bracket sets the final price per ticket.
3. Under **Brackets**, fill in **From quantity**, **To quantity** (leave it blank for no maximum) and the **Discount** or price. Click **Add bracket** for more. You can have up to 10.
4. Check the **Preview**.
5. Optionally add **Quick-select quantities**, set **Stop multibuy at % sold**, and set **Offer starts at** and **Offer ends at**.
6. Switch on **Allow promo codes on top** only if customers should be able to use a promo code as well.

If you change the pricing mode after setting brackets, tick the box to confirm you have checked the bracket values for the new mode.

![The Multibuy discounts section](/screenshots/multibuy-discounts.png)

## How the offers work together

- **Early Bird.** Each Early Bird ticket costs its Early Bird price. If the sale or Multibuy price is lower, the customer pays that. Early Bird is never added on top of another discount on the same ticket.
- **Sale and Multibuy.** These work together. A percentage Multibuy takes its percentage off the price customers would otherwise pay, so during a sale it comes off the sale price. A fixed Multibuy price is never higher than the current selling price.
- **Promo codes.** A promo code cannot be used on tickets at an Early Bird price. It cannot be combined with a Multibuy price unless **Allow promo codes on top** is on. See [Create promo codes](/offers-and-promotions/promo-codes).

Because a sale and a percentage Multibuy can stack, check the **Preview** and the final price before you launch, so the combined discount is what you intend.

## What your customers will see

- **Sale.** The sale price in place of the normal price.
- **Early Bird.** The normal price struck through, the Early Bird price, how many tickets are left at that price and a countdown.
- **Multibuy.** "Buy more, save more" cards on the competition page, showing the price for each quantity.

## Check how an offer performed

Open **Reports** and look at the **Promotions** and **Competitions** reports. They show how Early Bird and your other offers were used. See [Reports](/reports/).

## Tips

- Set offers up before the competition goes live, and look at the competition page as a customer.
- Use a popup to shout about a running offer. See [Show a popup](/offers-and-promotions/popups).

## Common questions

**Can I use a sale and Early Bird together?**
Yes. Each Early Bird ticket costs the lower of its Early Bird price and the price it would otherwise have.

**Why can I not save my Early Bird tiers?**
Check that each tier has an end, that prices rise from tier to tier, and that each tier ends later than the one before.

## Related guides

- [Create a competition](/competitions/create-a-competition)
- [Create promo codes](/offers-and-promotions/promo-codes)
- [Boost instant wins with Amplify](/offers-and-promotions/amplify)
- [Show a popup](/offers-and-promotions/popups)
