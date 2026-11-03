---
title: Manage wallets and top-ups
description: See customers' wallet balances, add or take money from a wallet, let customers top up Site Credit, and reverse a top-up.
---

# Manage wallets and top-ups

The **Wallets** screen shows every customer's balances and lets you adjust them. **Top-ups** shows card payments that add Site Credit. This guide covers both.

## Before you start

- Adjusting a wallet needs the permission to add or take money from wallets. Admins always have it. For a moderator, the owner must switch on "Add or take money from a customer's wallet, and reverse a top-up".
- Top-ups also need card payments set up. See [Set up card payments](/payments/set-up-card-payments).

## See customer wallets

1. Open **Customers**, then **Wallets**.
2. The cards at the top show **Held as Cash Wallet** (what customers could withdraw), **Held as Site Credit**, **Money on hold** and **Withdrawals waiting**.
3. Use the tabs: **All**, **Has Cash Wallet**, **Has Site Credit**, **Large balances** (£100 or more), **Withdrawal waiting**, **On hold** and **Empty**.

![The Wallets screen](/screenshots/wallets-list.png)

Each row shows the **Cash Wallet**, **Site Credit**, **Total** and **Last activity**. Click **Quick look** or **View** for the customer's wallet history.

## Add money to a wallet

1. On the customer's row, click **Adjust**, then **Credit**.
2. Enter the **Amount** in pounds.
3. In **Add it to**, choose **Cash Wallet (can be withdrawn)** or **Site Credit (spend on entries)**.
4. Type a **Reason**. It is kept on the customer's history.
5. Click **Add to wallet**.

![Crediting a wallet](/screenshots/wallet-adjust.png)

## Take money from a wallet

1. Click **Adjust**, then **Debit**.
2. Enter the **Amount** and a **Reason**.
3. Click **Take from wallet**.

The money is taken from Site Credit first, then from the Cash Wallet. You cannot take more than the wallet holds.

There is no limit or second approver on these adjustments, so take care. The reason you write is kept on the customer's history.

## Let customers top up

A top-up is a card payment that adds Site Credit.

1. Open **Settings**, **Business Rules**, then **Wallet Rules**.
2. In **Top-ups**, switch on **Allow top-ups**.
3. Set the **Top-up bonus (%)**, for example 10 means a customer who pays £50 receives £55. 0 means no bonus.
4. Set the **Minimum top-up (£)** and **Maximum top-up (£)**.
5. Set the **Quick-pick amounts**, comma separated, for example 10,25,50,100.
6. Click **Save Settings**.

Top-ups follow a customer's spending controls. A customer on a break or who has self-excluded cannot top up, and a top-up is checked against their spend limits.

## Check top-ups

Open **Payments**, then **Top-ups**. The cards show **Topped up today**, **Topped up this month**, **Bonus given this month** and **Needs a look**. The tabs are **All**, **Paid**, **Pending**, **Failed**, **Reversed** and **With bonus**.

![The Top-ups screen](/screenshots/topups-list.png)

A top-up that is still pending after 3 hours is marked failed. If a payment arrives after that, it is still credited.

## Reverse a top-up

Use **Reverse** on a paid top-up for a chargeback, or for a refund you made at the payment provider.

1. On the top-up's row, click **Reverse**. A box shows what will happen, including the customer's Site Credit before and after.
2. Type a reason and confirm.

Reversing takes the Site Credit back. It does **not** refund the card. Do that at your provider. It also pauses the customer's withdrawals and flags them. This is because the money may be disputed, so they should not be able to cash out their Cash Wallet until you have looked into it. Use **Allow withdrawals again** afterwards to lift the pause.

If the customer has already spent some of it, their balance can go negative. Withdrawals stay paused until it clears.

## What your customers will see

In their wallet, a **Top up** button with the amounts you set, and the bonus they will receive. If they cannot top up, for example because of a spending control, they are told why. Site Credit can be spent on tickets but cannot be withdrawn as cash.

## Tips

- Check **Needs a look** on **Top-ups** each day.
- Write a clear reason on every adjustment. It protects you and the customer.

## Common questions

**Can a top-up go into the Cash Wallet?**
No. Top-ups always add Site Credit.

**Does a reversal refund the customer's card?**
No. Refund the card at your provider.

**Can I take back a credit I gave by mistake?**
Yes. Use **Debit**, with a reason.

## Related guides

- [Understand the wallet and set your wallet rules](/wallets-and-withdrawals/wallet-rules)
- [Approve and pay withdrawals](/wallets-and-withdrawals/withdrawals)
- [Deal with a chargeback or held credit](/payments/chargebacks-and-held-credit)
- [Player protection](/player-protection/)
