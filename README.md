# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.


## To Do

- install Tailwindcss
- try tailwindui components based on invision wireframes
  - navbar
  - sidebar
  - dashboard
  - based on invision wireframes
- Daisy UI
  - light, dark themes, theme switcher
- install supabase
  - brand accounts schema tables
  - seed data
- install
- Homepage
- Brand
  - landing page
  - homebase
  - create campaign
  - create audience
  - Fund Fiat Wallet (stripe/sqaure)
- User placeholder
  - landing page
  - install stacks.js, login
  - gallery display NFTs from wallet
- Error pages 404, 500
- Deploy on Vercel

## Sitemap

- Homepage
  - Business Landing Page (Signin - Supabase magic)
    - Account (update, delete, download data, fund with stripe/square)
    - Dashboard
    - Create Audience
      - Purchase drawer (Stripe checkout, invoicing?)
    - Create Campaign
      - creative drawer
  - Consumer Landing Page (connect wallet)
    - NFT gallery
  - Education Portal
    - Brand Series/ tags
    - Consumer Series/ tags
  - Thoughtpieces/ Whitepapers
  - FAQ
    - Business FAQ
    - Consumer FAQ
  - T&Cs
  - About
  - Contact
  - Careers
