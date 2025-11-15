# Artfelt Therapy

A modern therapy booking and consultation platform built with Next.js, featuring Razorpay payments and Resend email notifications.

## Features

- 🎨 Art therapy booking system
- 💳 Integrated Razorpay payment processing
- 📧 Automated email confirmations via Resend
- 📱 Responsive design with Tailwind CSS
- 🔒 Secure payment verification
- ✨ Beautiful React Email templates

## Getting Started

First, set up your environment variables by creating a `.env` file:

```bash
cp .env.example .env
```

Then add your API keys to `.env`:
- Razorpay keys from [dashboard.razorpay.com](https://dashboard.razorpay.com/app/website-app-settings/api-keys)
- Resend API key from [resend.com/api-keys](https://resend.com/api-keys)

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

Required environment variables for production:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
RESEND_API_KEY=your_resend_api_key
```

## API Routes

- `POST /api/payment/create-order` - Create Razorpay payment order
- `POST /api/payment/verify` - Verify payment and confirm booking
- `POST /api/email/send-confirmation` - Send booking confirmation emails

## Deploy on Vercel

This project is optimized for deployment on [Vercel Platform](https://vercel.com/new).

**Important**: Make sure to add all environment variables in your Vercel project settings before deploying.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
