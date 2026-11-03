---
title: Add instant wins to a competition
description: How instant wins work, how to add prizes and winning ticket numbers, schedule them to release later, and change them safely once a competition is on sale.
---

# Add instant wins to a competition

An instant win is a prize hidden on certain ticket numbers. When a customer buys a ticket with a winning number, they win straight away, on top of the main prize. This guide covers how they work, how to add them, and how to manage them after the competition is on sale.

## Before you start

- Check that **Instant wins** is switched on. See [Switch features on and off](/getting-started/switch-features-on-and-off).
- You need to be an admin. A moderator needs the switch for creating and editing competitions, categories and instant-win prizes.
- Decide your prizes, their values and how many winning tickets each one has.

## How instant wins work

- **The winning ticket numbers are fixed in advance.** You pick them (or the platform picks them at random) before customers buy. They are chosen with a secure random generator, never by a person looking at sales.
- **A customer wins when they buy a winning number.** They find out when their tickets are issued, or when they play a mini game if you use one. See [Add a mini game](/instant-wins-and-games/mini-games).
- **Every prize has a type.** The type decides what happens when someone wins:
  - **Physical prize (claimed by winner).** The winner claims it and you send it. See [Send prizes and show winners](/instant-wins-and-games/prizes-and-winners).
  - **Cash Wallet (paid instantly).** The prize value is paid straight into the winner's Cash Wallet.
  - **Site Credit (paid instantly).** The prize value is paid straight into the winner's Site Credit.
  - **Win only (nothing to pay).** The win is shown with nothing to pay. This is useful for bonus points on a leaderboard.

## Add prizes while you create the competition

1. Open **Competitions**, then **Competitions**, then **New competition**.
2. Open the **Instant wins** tab. The section is called **Instant Win Prizes**.
3. Click **Add prize** and fill in:
   - **Prize name.** Required.
   - **Value.** The amount paid to the winner for Cash Wallet and Site Credit prizes.
   - **Prize type.** Required. Choose one of the four types above.
   - **Description** and **Prize image**, if you want them.
   - **Winning tickets.** Required. See [Choose the winning tickets](#choose-the-winning-tickets).
   - **Offer site credit as an alternative** and **Offer cash as an alternative**, if the winner may swap a physical prize. Each asks for its own value.
   - **Sort order**, and the **Active** switch.
4. Click **Add prize** again for each further prize.
5. Save the competition with **Create**. Random ticket numbers are picked at that moment.

![The Instant Win Prizes section](/screenshots/instant-win-staged-prize.png)

**Bulk Add** at the top of the section lets you add several prizes at once. A jackpot and Amplify are added later, once the competition is saved. See [Add a jackpot](/instant-wins-and-games/jackpots).

### Choose the winning tickets

For each prize, **Winning tickets** has three choices:

- **Pick them at random when I press Create.** Enter the **Number of winning tickets**.
- **I will type the ticket numbers.** You choose the exact numbers. You cannot pick one that is already sold or already used.
- **Schedule: pick them from the unsold tickets when it goes live.** The numbers are chosen from tickets that are still unsold, at a time you set. See [Release instant wins later](#release-instant-wins-later).

## Add or change prizes on a live competition

1. Open the competition and click the **Instant wins** tab.
2. At the top you will see three cards: **Prizes** (how many), **Awarded** (how many have been won) and **Amplify**.
3. Under **Prizes** you will see a table with the **Name**, **Value / pot**, **Jackpot ticket**, **Tickets**, **Won**, whether it is active, the **Prize type**, whether it is scheduled, any promotion, and the credit and cash alternatives.

![The Instant wins tab of a competition](/screenshots/instant-win-prizes-list.png)

Use the buttons above the table:

- **New instant win** adds one prize.
- **Bulk Add** adds several at once. For each, give the **Prize Name**, **Value (£)**, **Number of Tickets**, **Prize type**, and any alternatives. The platform picks random unsold tickets for you.
- **Add Jackpot** is covered in [Add a jackpot](/instant-wins-and-games/jackpots).

![The Bulk Add Instant Wins form](/screenshots/instant-win-bulk-add.png)

On each row, **Edit** changes the prize and **Manage Tickets** changes its winning numbers.

## Edit a prize

Click **Edit** on a row. The form has these sections:

- **Prize Details.** Name, **Prize type**, **Amount paid to winner**, description, image, sort order and **Is active**.
- **Site Credit Alternative** and **Cash Alternative.** Let a winner swap a physical prize.
- **Ticket Summary.** How many tickets are **Assigned**, how many are **Won / Claimed**, and the **Assignment Mode**.
- **Scheduling.** See below.
- **Promotion / Ticket Hunt.** Switch on **Run a promotion on this instant win** to give it a promotion period with an optional countdown before it starts.

![Editing an instant win](/screenshots/instant-win-edit.png)

## Change the winning ticket numbers

1. On the prize's row, click **Manage Tickets**.
2. Use **Add Ticket** to type a number, or **Add Multiple Tickets** to add random unsold ones.
3. Use **Remove** to take a number off.

The table shows each **Ticket #**, whether it has been **Won**, the **Winner** and **Claimed At**.

![The winning tickets for a prize](/screenshots/instant-win-tickets.png)

You cannot remove a ticket that has already won. Every change you make is recorded in the **Instant win history** list on the competition, and changes made after the competition opened are flagged, so there is always a record of who changed what.

## Release instant wins later

A scheduled prize has no winning numbers until a time you choose. At that moment it picks its numbers from the tickets that are still unsold.

1. In **Scheduling**, switch on **Schedule this instant win**.
2. Set **Go live at**, **Expires at** and the **Number of ticket numbers to assign at launch**.

This works well for a surprise prize partway through a competition.

## See every instant win in one place

Open **Competitions**, then **Instant Wins**. The list shows every prize across all your competitions, with **New instant win** and **Bulk Add**.

## What your customers will see

The competition page shows the instant prizes, with progress. Customers see their wins when their tickets are issued, or as they play a mini game. Their wins appear in their account. Cash Wallet and Site Credit prizes arrive in their wallet at once.

## Tips

- Spread your prizes: a few big ones and many small ones keep customers coming back.
- Check the **Ticket Summary** on a prize if the numbers look wrong.
- A prize that has been won cannot be deleted. Switch off **Is active** instead.

## Common questions

**Why can I not add a winning number?**
It may already be sold, or already used by another prize.

**Do instant wins affect the main draw?**
No. They are separate from the main prize.

## Related guides

- [Add a jackpot](/instant-wins-and-games/jackpots)
- [Send prizes and show winners](/instant-wins-and-games/prizes-and-winners)
- [Add a mini game](/instant-wins-and-games/mini-games)
- [Create a competition](/competitions/create-a-competition)
