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

Install [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)

```bash
npm -D @tailwindcss/typography
```

### [DaisyUI](https://daisyui.com/)

```bash
npm i -D daisyui
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
npm i -D theme-change
```

### [Supabase](https://supabase.com/)

Follow the Supabase [guide](https://supabase.com/docs/guides/with-svelte) to setup for svelte.

```bash
npm install @supabase/supabase-js
```

Add environment variables in `.env`:

```.env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

### [GraphCMS](https://graphcms.com/)

Follow the GraphCMS [guide](https://graphcms.com/blog/sveltekit-starter-blog-with-graphcms) to setup for SvelteKit.

Install `graphql-request` and `graphql` as dependencies to query the GraphCMS GraphQL API endpoints

```bash
npm i -D graphql-request graphql
```
Add environment variables in `.env`:

```.env
VITE_GRAPHCMS_URL=https://{ZONE}.graphcms.com/v2/{K}/master
```

Place access URL endpoint to a `.env` file which can be accessed in Vite with `import.meta.env.VITE_GRAPHCMS_URL`

```.env
VITE_GRAPHCMS_URL=https://myendpoint.com
```
## Icons

Obtains SVG details for icons from [Bootstracp](https://icons.getbootstrap.com/)

## To Do

- install Tailwindcss
- try tailwindui components based on invision wireframes
  - dashboard
  - based on invision wireframes
- Daisy UI
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


Try daisyUI drawer component in all /account pages.
Move sidebar menu to it's own component
fix sign in and sign out, and routing
- supabase sign in url /brands/account
- sign out - may need to pass handleSignout as props
  - just need `export let handleSignout` example https://reactgo.com/svelte-props-example/

Account layout needs a slot
hardcode the sidebar into the layout and add a slot in the drawer content
https://linguinecode.com/post/how-to-pass-children-elements-in-svelte

add sidebar drawer component to the layout
make the drawer content a slot

```html
<Sidebar>
  <p>my drawer content</p>
</Sidebar>
```

In the sidebar component:

```html
<div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-2" class="mb-4 btn btn-primary drawer-button lg:hidden">open menu</label>
    <slot />
    <slot></slot>
  </div>
```


https://svelte.dev/tutorial/slot-props


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
