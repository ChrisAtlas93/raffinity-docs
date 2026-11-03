---
title: Deal with a chargeback or held credit
description: Record a chargeback, close it as won or lost, and release or refund credit that is being held after a duplicate payment or a refused refund.
---

# Deal with a chargeback or held credit

Two things can leave money in limbo. A **chargeback** is when a customer's bank takes a card payment back. **Held credit** is Cash Wallet money a customer cannot yet withdraw while you decide what to do. This guide covers both.

## Before you start

- **Chargebacks** is for admins only.
- **Held credit** can be used by admins, or by moderators who have been allowed to adjust wallets or refund to a card.
- Your payment provider does not tell your site about chargebacks automatically, so you record them yourself.

## Record a chargeback

1. Open the order that was charged back. See [Find and read an order](/orders-and-refunds/find-and-read-orders).
2. Click **Actions**, then **Record chargeback**. It only appears for an order paid through a card provider.
3. Fill in **What is the chargeback about?**, the **provider's reference** (optional) and **Respond to the bank by** (optional).
4. Confirm.

What happens:

- The order is cancelled and its tickets go back. The card is **not** refunded, because the bank already took the money.
- Any Site Credit used goes back to the customer as Site Credit.
- The customer's withdrawals are paused and the customer is flagged.
- A payment alert is emailed to staff.

If the order was already refunded, you are warned that the customer may have been repaid twice.

## Work through your chargebacks

1. Open **Payments**, then **Chargebacks**.
2. The cards show **Money at risk**, **Due soon**, **Won** and **Lost**. The tabs are **All**, **Open**, **Due soon**, **Won** and **Lost**. **Due soon** means due within 3 days or overdue.

![The Chargebacks screen](/screenshots/chargebacks.png)

Each chargeback has two actions:

- **Close.** Choose **We won** or **We lost**, and add a note. Nothing moves automatically. If you won the money back, deal with the order and the customer by hand.
- **Allow withdrawals again.** Lets the customer withdraw again, once you are happy. Say why.

## What customers see during a chargeback

If they try to withdraw, they see that withdrawals are paused on their account while you review it, and to contact support.

## Release or refund held credit

Credit is held when a customer pays twice for the same thing, or when a card refund is refused by the bank. The customer sees it in their Cash Wallet, but cannot withdraw or convert it yet.

1. Open **Payments**, then **Held credit**.
2. The cards show **On hold now**, **Oldest hold**, **Released** and **Refunded to card**. The oldest hold turns amber after 3 days and red after 7.
3. Use the tabs: **On hold**, **Released**, **Refunded to card** and **All**.

![The Held credit screen](/screenshots/held-credit.png)

For each hold, you can:

- **Release.** The customer can then withdraw or convert it like any other Cash Wallet money. Say why. You need permission to adjust wallets.
- **Refund to card.** Takes the money out of their Cash Wallet and sends it back to the card they paid with. If the bank refuses it, it goes back into their Cash Wallet, on hold, with the reason. Say why. You need permission to refund to card, and the card payment must be paid.

## What your customers will see

Held money is part of their Cash Wallet balance, but their wallet page does not show it separately. If they try to withdraw it, they see that part of the Cash Wallet is on hold while a payment is reviewed. They get an email when credit is put on hold, and again when it is released.

## Tips

- Deal with holds promptly. Customers can see the money and are waiting.
- Gather the proof you need before the "respond by" date on a chargeback.
- Keep your notes clear. Both screens keep a record of what you decided.

## Common questions

**Why was credit put on hold?**
Either a duplicate card payment arrived, or a card refund was refused by the bank. The reason is shown on the hold.

**Does a chargeback pause all the customer's withdrawals?**
Yes, until you click **Allow withdrawals again**.

**What if the card payment arrives after the order closed?**
It is credited to the Cash Wallet as normal, withdrawable money. It is not held.

## Related guides

- [Check card payments and refunds](/payments/check-card-payments)
- [Cancel and refund an order](/orders-and-refunds/cancel-and-refund)
- [Wallets and withdrawals](/wallets-and-withdrawals/)
- [Customers](/customers/)
