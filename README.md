# Svelte Component Library Template

**You can create your own component library to your applications with this template.**

A base for building Svelte component library with SvelteKit and Storybook.

## Using

**On GitHub:**

`Use this template` button on top right.

Read more: [Creating a repository from a template](https://help.github.com/en/articles/creating-a-repository-from-a-template)

**CLI:**

Clone it with [degit](https://github.com/Rich-Harris/degit)

```bash
npx degit HiiiiD/svelte-component-library-template svelte-component-library-template
cd svelte-component-library-template
yarn # or npm i
```

## Development

1. `yarn` or `npm i`

2. Add your component's code to [src/lib](./src/lib) as directory, e.g.: [src/lib/HelloComponent/](./src/lib/HelloComponent/) (or add your component directly to [src/lib/](./src/lib/)).

3. Create a stories for your component at `src/lib/<component>.stories.svelte` or `src/lib/<directory>/<component>.stories.svelte`. You can use the [HelloComponent stories template](https://github.com/HiiiiD/svelte-component-library-template/blob/master/src/lib/HelloComponent.stories.svelte)

4. In `index.ts` file, export your component

4. Run `yarn storybook` or `npm run storybook` to start **Storybook** on port 6006

5. View and change your components in real time. No restart needed

## Using components in app

Import _component library_ into your app in `App.svelte` :

```html
<script>
  import { HelloComponent } from 'svelte-component-library-template'
  export let name;
</script>

<HelloComponent {name} />
```

## Technical background

More: https://github.com/sveltejs/sapper-template/blob/master/README.md#using-external-components

-   `svelte` https://svelte.dev
-   `eslint` and `prettier` for formatting and linting

Supported Node.js v12 LTS and v14 LTS.


