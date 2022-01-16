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

## Node.js version

Using Node Version Manager, use latest stable version of node.

```bash
nvm use v16.13.1
```

## Dependancies

### [TailwindCSS](https://tailwindcss.com/)

Install using [`svelte-add`](https://github.com/svelte-add/tailwindcss) utility:

```bash
npx svelte-add@latest tailwindcss
```

Install Tailwind Typography

```bash
npm -D @tailwindcss/typography
```

### [DaisyUI](https://daisyui.com/)

```bash
npm i daisyui
```

Update `tailwind.config.js`:

```js
module.exports = {

  plugins: [
    require('daisyui'),
  ],

}
```

Install [`theme-change`](https://github.com/saadeghi/theme-change) package:

```bash
npm i theme-change
```

### [Supabase](https://supabase.com/)

Follow the Supabase [guide](https://supabase.com/docs/guides/with-svelte) to setup for svelte.

```bash
npm install @supabase/supabase-js
```

Add environment variables in `.env`:

```.env
SVELTE_APP_SUPABASE_URL=YOUR_SUPABASE_URL
SVELTE_APP_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

### [GraphCMS](https://graphcms.com/)

Follow the GraphCMS [guide](https://graphcms.com/blog/sveltekit-starter-blog-with-graphcms) to setup for SvelteKit.

Install `graphql-request` and `graphql` as dependencies to query the GraphCMS GraphQL API endpoints

```bash
npm i -D graphql-request graphql
```


Place access URL endpoint to a `.env` file which can be accessed in Vite with `import.meta.env.VITE_GRAPHCMS_URL`

```.env
VITE_GRAPHCMS_URL=https://myendpoint.com >> .env
```

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
  - link to brand landing apge
  - link to consumer wallet app
  - Brand login (modal)
  - if logged in route to homebase /account or /dashboard
- Brand
  - landing page
  - homebase
    - create campaign (could be in modal)
    - create audience (could be in modal)
    - Fund Fiat Wallet (stripe/sqaure) (could be in modal)
    - campaigns list
    - audience list
  - campaign dashboard
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
  - Education Portal (blog)
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
