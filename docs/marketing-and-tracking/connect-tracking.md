---
title: Count visits and connect ad platforms
description: Count visits and see where customers come from, understand the cookie choices, and connect Google, Meta, TikTok and other ad platforms.
---

# Count visits and connect ad platforms

To know which advert or link brings you customers, your site counts visits and remembers where each visitor came from. You can also connect ad and analytics platforms, so they can see your sales. This guide covers both, and the cookie rules that go with them. It is for admins only.

## Before you start

- Have your tracking details ready from each platform, such as your Meta Pixel ID or your Google Analytics Measurement ID.
- Think about your cookie notice. Nothing loads on your website, and nothing is sent about a customer, until a visitor agrees to that purpose in the notice.

## Count visits and sources

1. Open **Settings**, then **Business & Site Settings**.
2. Find the section **Visit counting and sources**.
3. Switch **Count visits and track sources** on or off. Off stops all visit counting.
4. Choose how the source is remembered in the visitor's browser:
   - **Only after the visitor accepts analytics cookies (strictest).** Nothing is stored and no visit is counted until they say yes.
   - **Count visits straight away without storing anything, remember the source only after they accept (visitor can opt out).** Every page view is counted without storing anything on their device. The source is only remembered for those who accept.
   - **Always, without asking.** Not recommended. UK rules require consent for this.
   - **Never remembered.** Visits are still counted, but sales are not credited to a source.
5. Click **Save Settings**.

![Visit counting and sources](/screenshots/visit-counting-settings.png)

This choice decides whether your cookie notice asks about analytics.

## The cookie notice

Your site has a cookie notice for visitors, with **Accept all**, **Reject all** and **Customise**. It only asks about the purposes you actually use. A footer link, **Cookie settings**, lets visitors change their mind. A **Cookie policy** page is created for you automatically from what you have switched on. It cannot be edited.

There are two purposes: **Analytics cookies** (visit counting and Google Analytics) and **Marketing cookies** (the ad platforms).

## See what is connected

Open **Marketing**, then **Ads & Tracking**. The **Overview** tab lists every platform with its cookie purpose, whether browser tracking and server tracking are on, when the last event was delivered and the last problem.

![The Ads & Tracking overview](/screenshots/tracking-overview.png)

Each platform has its own tab. Connect each one there and click **Save**.

## Connect Google

Open the **Google** tab. It has three parts.

- **Google Analytics 4.** Browser tracking with your **Measurement ID**, from Google Analytics, Admin, Data streams. It loads only for visitors who agreed to analytics cookies.
- **Google Tag Manager.** Your **Container ID**. Anyone who can edit the container can run any script on your site, so keep access to it tight. It loads only for visitors who agreed to marketing cookies.
- **Google Ads.** Your **Conversion ID** and an optional **Purchase conversion label**. Without the label, only remarketing is set up.

Google is browser only. There is nothing sent from the server.

![The Google tab](/screenshots/tracking-google.png)

## Connect Meta (Facebook and Instagram)

Open the **Meta (Facebook)** tab.

1. Enter your **Dataset (Pixel) ID**, digits only, from Meta Events Manager.
2. Switch on **Browser tracking (the Meta Pixel)**. It loads only for visitors who agreed to marketing cookies.
3. For **Server tracking (Conversions API)**, add your **Access token**. Each paid order is then sent from your site, so sales count even when the browser is closed. The token is write-only: once saved it is never shown again.
4. Optionally switch on **Product catalogue feed**. It publishes your live competitions as a feed Meta can collect for catalogue and retargeting adverts. To send changes straight away, also add your **Catalogue ID**.
5. Click **Save**, then **Verify connection**.

Use **Start test mode (1 hour)** with a **Test event code** from Meta to check events without affecting live reporting. It switches itself off after an hour. **Count test orders (1 hour)** counts your own test orders during that time.

![The Meta tab](/screenshots/tracking-meta.png)

## Connect TikTok, Snapchat, Pinterest, Reddit, X and Microsoft

Each of these has its own tab and works the same way.

- **Browser tracking.** Add your pixel or tag ID. It loads only for visitors who agreed to marketing cookies.
- **Server tracking (conversions API).** Add the access token the platform gives you. Each paid order is sent from your site, for customers who agreed to marketing cookies.
- **Test event code.** From the platform's test events screen, used only while test mode runs.

Each tab shows a status: whether browser and server tracking are on, test mode, the last successful delivery and any problem. Use **Start test mode**, **Remove saved keys** and **Send failed again** as needed. Microsoft Advertising has browser tracking only.

## What your customers will see

The cookie notice, the first time they visit, with the choices you offer. Nothing loads for them until they agree. They can change their mind in the footer.

## Tips

- Use test mode before you point real adverts at your site.
- Connect only the platforms you really use.
- Check the **Overview** tab after a few days, to see events being delivered.

## Common questions

**Why are no events showing?**
Visitors must have agreed to the matching cookie purpose, and the platform must be switched on.

**Do I need a cookie notice?**
It appears automatically when a purpose that needs consent is on.

**Where do I edit the cookie policy?**
You cannot. It is built for you from what is switched on.

## Related guides

- [Build tracked links and record ad spend](/marketing-and-tracking/tracked-links-and-ad-spend)
- [Reports](/reports/)
- [Your website](/your-website/)
- [Create promo codes](/offers-and-promotions/promo-codes)
