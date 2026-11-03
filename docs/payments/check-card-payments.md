---
title: Check card payments and refunds
description: See every card payment and card refund, understand the statuses, and deal with ones that need a person.
---

# Check card payments and refunds

The **Card payments** and **Card refunds** screens show every card payment and every card refund, and what your payment provider said about each. Most take care of themselves. This guide shows you how to spot the few that need you.

## Before you start

- These screens are for admins only.
- Your **Overview** has a **Payments needing attention** card, and a **Refunds** card. Start there.

## Check card payments

1. Open **Payments**, then **Card payments**.
2. The cards at the top show **Paid**, **Success rate**, **In progress now** and **Needs a person**.
3. Use the tabs: **All**, **Paid**, **In progress**, **Failed** and **Needs a person**. The list shows the last 7 days. Change that under **Filters**. **In progress** and **Needs a person** always show every open payment.

![The Card payments screen](/screenshots/card-payments.png)

Each row shows the **Reference**, the **Customer**, what it was **For** (an order or a top-up), the **Amount**, the **Provider**, the **Status**, whether it was **Live** or **Test**, any problem, and when it started and was paid.

### The statuses

- **Created**, **Pending.** The payment has started.
- **Paid.** The money has arrived.
- **Failed**, **Cancelled**, **Expired.** The customer did not pay.
- **Needs a person.** Something is unclear and a person should check.

A payment that is still open after 30 minutes shows **Still open**.

### Check with the provider

For a payment that is not final, click **Check again** on its row. It asks the provider what happened to the payment and acts on the answer. It is safe to do at any time.

### Clear one you have dealt with

For a payment flagged as needing a person, use **Mark as resolved**, with a note about what you did, once you have dealt with it. **Reopen** puts it back if you need to. Only flagged payments can be resolved.

## Check card refunds

1. Open **Payments**, then **Card refunds**.
2. The cards show **Needs action**, **In progress**, **Refunded** and **Refused**.
3. Use the tabs: **All**, **Needs action**, **In progress**, **Refunded** and **Refused**.

![The Card refunds screen](/screenshots/card-refunds.png)

The statuses are **Waiting**, **Sending**, **Refunded**, **Refused**, **No clear answer**, **Needs a person** and **Void**. The kind of refund is **Order**, **Held payment**, **Top-up** or **Chargeback**.

### If a refund has no clear answer

For a refund marked **No clear answer** or **Needs a person**, check your provider's own portal first. Then:

- **Send again.** Only use it if you have checked and the refund was **not** made. If it was made, sending again would refund the customer twice. You must tick "I have checked the provider's portal and this refund has not been made" and say what you checked.
- **Mark as refunded.** Use it if the refund was made. Enter the provider's reference and a note. Nothing is sent to the provider.
- **Mark as resolved.** Use it to clear a flagged refund you have dealt with, with a note.

### If the bank refuses a refund

The money is put into the customer's Cash Wallet, on hold, and the customer is emailed. You then decide what to do with it. See [Deal with a chargeback or held credit](/payments/chargebacks-and-held-credit).

## What your customers will see

A paid order, or a pending one if the payment has not yet cleared. A refund appears on their card, which can take a few working days, or in their Cash Wallet.

## Tips

- Look at **Needs a person** on both screens every day.
- Never press **Send again** without checking the provider's portal. A double refund is real money.
- Use **Export CSV** to share the list with your accountant.

## Common questions

**Why is a payment still pending?**
Use **Check again**. The provider may not have told your site yet.

**Why did a refund go to the wallet?**
Either no provider was connected, or the bank refused the card refund. Check the refund's status.

## Related guides

- [Set up card payments](/payments/set-up-card-payments)
- [Deal with a chargeback or held credit](/payments/chargebacks-and-held-credit)
- [Cancel and refund an order](/orders-and-refunds/cancel-and-refund)
- [Find and read an order](/orders-and-refunds/find-and-read-orders)
