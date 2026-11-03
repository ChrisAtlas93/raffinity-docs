---
title: Brand your emails and set up sending
description: Set your from name and address, add your logo and colours, and connect an email provider such as Resend so your emails are really sent.
---

# Brand your emails and set up sending

Your site sends emails for you, such as order confirmations and withdrawal updates. This guide shows how to make them look like yours, and how to connect an email provider so they are actually sent. Until you do, no real emails go out. It is for admins only.

## Before you start

- You need an email provider. Resend is a simple option, and the guide below uses it. Other options are listed in [Choose how emails are sent](#choose-how-emails-are-sent).
- Resend's free plan covers a limited number of emails each month, around 1,000 at the time of writing. Check their current plans.
- You need a domain you own, to send from, such as `send.yourbrand.co.uk`.

## Brand your emails

1. Open **Settings**, then **Email**, then the **Branding** tab.
2. Under **Sending Identity**:
   - **From Name.** Required. For example your brand name.
   - **From Email Address.** Required. It must be on the domain you verified with your email provider. With Resend, that is the exact domain or subdomain you added there. Verifying a subdomain does not cover the main domain.
   - **Reply-To Address.** Optional. Where replies go if different from the from address.
3. Under **Branding**:
   - **Email Logo.** Click **Choose Logo**. A size of 400 by 120 pixels with a transparent background is recommended.
   - **Brand Colour** and **Text on Brand Colour.** Required. The text colour must be readable on the brand colour.
4. Under **Footer**, add **Footer Text**. It is shown at the bottom of every email. Include your company name, address and any legal text.
5. Check the **Live Preview**, which updates as you type.
6. Click **Save Branding**.

![The Email Branding tab](/screenshots/email-branding.png)

## Choose how emails are sent

1. Open the **Delivery (SMTP)** tab.
2. Under **Mail Driver**, choose the **Driver**:
   - **Log (Development - emails not sent).** Nothing is sent. This is only for testing.
   - **ElasticEmail (Cloudways Add-on).**
   - **Custom SMTP.** For any provider that gives you SMTP details.
   - **Resend (SMTP).**
3. Fill in the settings that appear for your choice.
4. Click **Save Settings**.

## Set up Resend

1. In Resend, add your sending domain at resend.com/domains and verify the DNS records Resend gives you.
2. In Resend, create a **Sending access** API key at resend.com/api-keys, limited to your sending domain.
3. In your admin, set the **From Email Address** on that verified domain in **Branding**.
4. On the **Delivery (SMTP)** tab, choose **Resend (SMTP)**, paste the key into **Resend API Key**, and click **Save Settings**. The key is stored encrypted. Leave it blank later to keep your existing key.
5. Click **Send Test** to send yourself a test email. It saves your settings and then sends.

![The Delivery (SMTP) tab](/screenshots/email-delivery.png)

## Check it works

Your **Overview** has an **Email sending** health chip. It shows **Not set up** while the driver is Log. Once it shows set up, place a test order and check the order confirmation arrives.

## What your customers will see

Emails from your from name and address, with your logo, colours and footer.

## Tips

- Send a test to yourself and to a different provider, such as a personal inbox, and check the spam folder.
- Use a sending subdomain, so your main email stays separate.
- Do this well before launch, and again if you change your branding.

## Common questions

**Why are my emails not arriving?**
Check the driver is not **Log**, the domain is verified with your provider, and the **From Email Address** is on that domain.

**Can I use my own email provider?**
Yes. Choose **Custom SMTP** and enter its details.

**Does this affect staff sign-in codes?**
Staff sign-in codes cannot be switched on while the driver is Log.

## Related guides

- [Edit the emails your customers and staff receive](/emails/edit-your-emails)
- [Before you go live](/getting-started/before-you-go-live)
- [Your team and settings](/your-team-and-settings/)
- [Glossary](/glossary)
