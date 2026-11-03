---
title: Find and read an order
description: Find an order with the tabs, search and filters, read everything on an order page, and understand orders that need attention and unpaid orders.
---

# Find and read an order

Every purchase on your site is an order. The **Orders** screen is where you look one up, check what a customer bought and paid, and spot orders that need you.

## Before you start

- **Orders** is open to moderators by default, to help customers. They can look but not cancel or refund unless the owner has switched that on.
- Orders are made by customers when they buy. You cannot create one by hand here. To give a customer free tickets, see [Give tickets to customers](/competitions/give-tickets-to-customers).

## Find an order

1. Click **Orders** in the admin menu.
2. Use the tabs across the top:
   - **All orders.**
   - **Needs attention.** See [Orders that need attention](#orders-that-need-attention).
   - **Refunds.**
   - **Today.**
   - **High value.** Orders of £100 or more.
   - **Instant wins.** Orders that won an instant prize.
   - **Site Credit.** Orders paid wholly or partly with Site Credit.
   - **New customers.** First orders.
3. Use the date buttons (**Today**, **7 days**, **30 days**, **This month**, **All time**, **Custom**). The list opens on the last 7 days.
4. Use **Search**, or open **Filters** to narrow by status, tickets, how it was paid, source, traffic type, device, competition, instant wins, new or repeat customer, promo code, and cancelled orders.

![The Orders list](/screenshots/orders-list.png)

Each row shows the **Order #**, the **Customer**, the **Source**, the **Amount**, the **Status** and the **Date**. Click **Quick look** for a summary panel with an **Open full order** button.

Admins can click **Export CSV** to download the list.

## Read an order

Click an order to open it. The top shows the order number, when it was placed, and its **Payment** and **Allocation** status. Cards show:

- **Amount paid**, and whether it was a card payment.
- **Tickets allocated**, and across how many competitions.
- **Amount refunded.**
- **Instant wins**, how many and their total value.

Below that:

- **Order items.** Each competition, how many tickets were requested and allocated, the amount and any refund.
- **Tickets.** Every ticket number. Instant-win tickets have a star.
- **Instant win claims.** Prizes won on this order and whether each is pending or fulfilled.
- **Customer.** Name and email, with a link to their account.
- **Payment details.** Status, reference, any promo code, amount paid, how much of it was Site Credit and how much by card, amount refunded, and when it was paid.
- **Where it came from.** Source and device.

Admins also see **Card payments** and **Card refunds** tables on the order, when it was paid by card.

![An order page](/screenshots/order-page.png)

## Orders that need attention

The **Needs attention** tab shows any order with one of these problems:

- It is paid but its tickets failed, or only some were issued.
- It is paid but its tickets are still pending more than 10 minutes after payment.
- A card refund for it has failed, has no clear answer, or needs a person.
- A card payment for it needs a person to look at it.
- It has an open chargeback.

Your **Overview** also counts these. See [Check card payments and refunds](/payments/check-card-payments).

## Unpaid and abandoned orders

- A customer has 10 minutes to complete a card payment, with up to four attempts for each order.
- An order that is still unpaid after 3 hours is marked failed. Any Site Credit used is returned and any promo code use is released.
- If a card payment arrives late, after the order has closed, the money goes into the customer's Cash Wallet, ready to withdraw. The customer is told.

## Delete an unpaid order

An order that was never paid has **Delete order** in its **Actions** menu. It releases the tickets and cannot be undone. A paid order cannot be deleted. Cancel and refund it instead. See [Cancel and refund an order](/orders-and-refunds/cancel-and-refund).

## What your customers will see

They see their orders in their account, with the tickets, any refund and any instant wins.

## Tips

- Check **Needs attention** every day.
- Use **Quick look** to answer a customer's question without leaving the list.
- Search by customer name or email to find all of someone's orders.

## Common questions

**Why does an order say tickets are pending?**
The tickets are given out shortly after payment. If still pending after 10 minutes, it appears under **Needs attention**.

**Can a moderator see orders?**
Yes, by default. They cannot cancel or refund unless the owner has switched those on.

## Related guides

- [Cancel and refund an order](/orders-and-refunds/cancel-and-refund)
- [Check card payments and refunds](/payments/check-card-payments)
- [Customers](/customers/)
- [Reports](/reports/)
