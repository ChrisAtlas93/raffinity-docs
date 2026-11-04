---
title: Connect your email marketing tool and push notifications
description: Connect Klaviyo, Mailchimp, Brevo or MailerLite to your site, and set up push notifications for customers who use your installed app.
---

# Connect your email marketing tool and push notifications

Your site can send customers and purchases to an email marketing tool, so you can email them from there. It can also send push notifications to customers who use your installed app. Both are set up under **Marketing**, then **Messaging**. They are for admins only.

## Before you start

- You need an account with your tool, and an API key from it.
- Raffinity switches on the email marketing tools feature for your site. If you see a message saying the tools are switched off, you can set things up, but nothing is sent until Raffinity switches the feature on. Ask Raffinity.

## Connect an email marketing tool

1. Open **Marketing**, then **Messaging**, then the **Email Marketing Tools** tab.
2. Choose your tool: **Klaviyo**, **Mailchimp**, **Brevo** or **MailerLite**.
3. Click **Connect** for that tool and add your API key.
4. Choose the list your customers should go into.
5. Use the switches to set how it works, such as **Sending to** the tool, or pausing it.

![The Email Marketing Tools tab](/screenshots/email-marketing-tools.png)

A tool shows a status such as **Not connected**, **Connected**, **Importing**, **Paused**, **Needs a new key** or **Problem**.

### Keep it running

Each connected tool has an upkeep menu with:

- **Sync competitions now**
- **Import existing customers**
- **Run check now** and **Check connection**
- **Retry failed**
- **Disconnect**

### Who is sent

Customers who have opted out, are on a break, self-excluded, closed, on a purchase hold or flagged are never marketed to. See [How player protection works](/player-protection/how-it-works). If someone asks you to stop, remove them in your tool as well. See [Deal with stop marketing requests](/support-and-complaints/stop-marketing).

## Set up push notifications

Push notifications let customers who use your installed app choose to hear about draw results, competitions they follow, wallet updates and app exclusives. They use a service called OneSignal.

1. In your OneSignal account, create a **Web** app and set its site URL to your website address.
2. Open **Marketing**, **Messaging**, then the **Push notifications** tab.
3. Switch on **Push notifications on**. Off hides every push option in the app.
4. Add your **OneSignal App ID** and **REST API Key**. The key is write-only: once saved it is never shown again.
5. Click **Save**, then **Send a test to me** to check it works.

![The Push notifications tab](/screenshots/push-notifications.png)

The **Status** area shows whether push is on, how many customers turned it on, and the last successful send. Notifications go to customers by their account, so someone who signs in on a new phone only needs to turn push on again.

### See what a notification sold

Every link in a notification is tagged automatically. The site remembers the last campaign link a customer arrived with for 30 days, so an order they place after tapping a notification is counted against **Push notifications** in your reports, even if they buy in a later visit, unless they arrive through a different campaign link first. A plain visit without a campaign link does not replace it. Open the Command Centre, then **Sales** for revenue by channel, or **Marketing** for the **Sources** table, where the source is `onesignal`, the medium is `push` and the campaign names the notification (for example `closing_12` for competition 12 closing soon, or `draw_12` for its draw result). You can also filter the **Orders** list by the **Push notifications** channel.

Push is new, so please check with Raffinity before you rely on it.

## What your customers will see

Customers who use your installed app can choose to turn on notifications. Your email tool sends whatever emails you design in it.

## Tips

- Send yourself a test before you tell customers about push.
- Run a **Check connection** if your tool shows a problem.
- Keep your API keys private.

## Common questions

**Why is nothing being sent to my email tool?**
Check that Raffinity has switched the feature on, that the tool is **Connected** and not **Paused**, and look at **Retry failed**.

**Can customers get push without the app?**
Push is for customers who use your installed app.

## Related guides

- [Deal with stop marketing requests](/support-and-complaints/stop-marketing)
- [Count visits and connect ad platforms](/marketing-and-tracking/connect-tracking)
- [Emails](/emails/)
- [Your website](/your-website/)
