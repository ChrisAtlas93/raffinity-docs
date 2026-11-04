---
title: Approve and pay withdrawals
description: Check, approve and pay customers' withdrawal requests, view bank details safely with an emailed code, and reject a request with a reason.
---

# Approve and pay withdrawals

When a customer asks to withdraw their Cash Wallet money, you check the request, approve it, send the bank transfer yourself, and mark it as paid. This guide takes you through it. Withdrawals are for admins only.

## Before you start

- Under **Settings**, **Business Rules**, **Wallet Rules**, **Withdrawals**, check **Allow Withdrawals** is on, and set the **Minimum Amount (£)**.
- Make sure someone is listed to receive the **New Withdrawal Request** email, under **Settings**, then **Email**, then **Notifications**. If nobody is listed, nobody is told when a customer asks to withdraw.
- You send the bank transfer outside your admin, so have your banking ready.

## How it works for the customer

- Only Cash Wallet money can be withdrawn.
- The money leaves their wallet as soon as they ask, and comes back if you reject the request or they cancel it.
- Their first withdrawal needs an ID check.
- They enter their bank details: account name, sort code and account number. Changing saved bank details needs their account password.
- They can cancel while the request is pending.
- Your site shows them "Withdrawals are processed within 2-3 business days". This wording is fixed.

## See the requests

1. Open **Payments**, then **Withdrawals**.
2. The cards show **Needs approving**, **Oldest waiting**, **Approved, not paid** and **Paid today**.
3. Use the tabs: **All**, **Needs action**, **Awaiting payment**, **Needs ID check**, **Bank changed**, **Completed** and **Rejected**. The queue tabs always show everything open, oldest first.

![The Withdrawals screen](/screenshots/withdrawals-list.png)

Each row shows the **Customer**, **Amount**, **Status** and **Checks**. How long a request has waited turns amber after 24 hours and red after 72.

## Open a request

Click a request. The page shows the amount, the customer's current wallet balances, how much has been paid to them before, a progress record, any **Staff notes** (customers never see these) and the **Checks before paying**:

- **ID verified** or not verified.
- **Bank details changed recently.**
- **Account in good standing**, meaning not banned, frozen or flagged.
- **Recent top-up**, within the last 3 days.
- Whether the withdrawal is **within what they have spent**. Prize winnings can fairly be higher.
- Whether it is their **first withdrawal**.

## Verify the customer's ID

1. Check the customer's identity in whatever way you do that.
2. Open the row's **Actions** menu and click **ID verified**, then tick "I have verified this customer's identity" and confirm. This applies to all of that customer's future withdrawals.

## Approve a request

1. In **Actions**, click **Approve**. It is greyed out until ID is verified.
2. If there are warnings, a **Needs a second look** list appears. Tick "I have looked at these and still want to approve".
3. Confirm. The customer is emailed to say it is approved and that you will pay it.

![The withdrawal Actions menu](/screenshots/withdrawal-actions.png)

## View bank details safely

1. In **Actions**, click **Bank details**.
2. Your site emails you a 6-digit code. Type it in and click **Unlock**.
3. The details are shown for 30 minutes. Every view is logged.

The code is valid for 10 minutes. Five wrong tries lock you out for 15 minutes, and a new code can be sent after 60 seconds. Bank details are never put in an email.

## Pay it

1. Send the bank transfer from your own bank.
2. Open the request and click **Mark paid**. Check **Amount sent (£)**, which starts as the amount they asked for (change it only if you sent a different amount), and enter the **Bank payment reference** from your transfer. Both are needed. Confirm.
3. The customer is emailed to say it has been paid, for the amount you sent.

The request then shows the amount sent and the reference in its history, and both appear in the exported list. Reports count the amount sent as money paid out.

## Reject a request

1. In **Actions**, click **Reject**.
2. Choose a reason, which is shown to the customer:
   - We could not verify your identity
   - The bank details provided look incorrect
   - The account name does not match your registered name
   - We need to review recent activity on your account
   - The amount is below our minimum withdrawal
   - Other, which needs a note
3. Confirm. The money goes back to their Cash Wallet and they are emailed.

## Work through several at once

Tick requests and use the bulk actions: **Approve selected** (skips any with a warning), **Mark selected as paid**, **Reject selected** and **Export bank details (CSV)** for approved requests. The export needs the emailed code, and every export is logged.

## Add a note

**Add note** keeps a note for the next person. Customers never see notes.

## What your customers will see

Their request in their wallet history as Pending, Approved (payment on its way), Paid, Rejected or Cancelled. They are emailed when it is submitted, approved, paid or rejected.

## Tips

- Pay approved requests promptly. Customers can see them waiting.
- Look at **Bank changed** before paying, in case an account has been taken over.
- Add a note whenever you do something unusual.

## Common questions

**Why can I not approve?**
The customer's ID has not been verified yet.

**Why is a withdrawal not allowed for a customer?**
Withdrawals are blocked if the customer's withdrawals are frozen or their Site Credit is negative. Check for a chargeback.

**Can a customer ask for the same amount twice?**
The same amount sent again within 2 minutes is refused.

## Related guides

- [Understand the wallet and set your wallet rules](/wallets-and-withdrawals/wallet-rules)
- [Manage wallets and top-ups](/wallets-and-withdrawals/manage-wallets-and-topups)
- [Deal with a chargeback or held credit](/payments/chargebacks-and-held-credit)
- [Emails](/emails/)
