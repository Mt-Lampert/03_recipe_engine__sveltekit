---
title: Project Journal
author: R. Matthias Lampert (perrhh.comworld@gmail.com)
date: 2023-01-12 
---


# TODO



# JOURNAL

## 2023-01-25 17:45 

- [x] ~~Implement a navigation for the Single Page in order to 
      navigate between the recipes.~~

Yes, I did it and it worked! I solved the problem from yesterday by thinking
out-of-the-box: The 'Prev' and 'Next' button both needn't be hyperlinks (`<a>`),
they can also fire an event handler. And this was the event handler that did
the trick:

```javascript
function goOne(step: number): void {
  let newIndex = myIndex + step;
  // index can't be < 0
  if (newIndex < 0) return;
  // index can't be greater than the number of recipes
  if (newIndex === $recipeInfo.currentRecipes.length) return;

  mySelf = $recipeInfo.currentRecipes[newIndex];
  myIndex = newIndex;
  myStatusPromise = getSingleRecipe(mySelf.url);
}
```

Since `mySelf`, `myIndex` and `myStatusPromise` are all status variables, they
all will trigger a re-rendering. Job done!



## 2023-01-25 08:05

Yesterday evening I faced an interesting problem. (The kind of interesting that
drives you nuts when it hits you but becomes an interesting challenge
once the state of madness has passed.) I found out that ...

> __... in SvelteKit it's a bad idea to request the same route with different
> params.__

Background: To implement a navigation for the Single Page I simply implemented
it like this:

```xml
<div class="navigation">
  <a href={'/' + $recipeInfo.currentRecipes[myIndex - 1].id}><button>Prev</button></a>
  <a href={'/' + $recipeInfo.currentRecipes[myIndex + 1].id}><button>Next</button></a>
</div>
```

This results in the following set of routes (sample):

```bash
http://localhost:5173/_2ab9d58e90fe18  # current route
http://localhost:5173/_c4918bb49de5a1  # route to previous item
http://localhost:5173/_049591058154eb  # route to next item
```

So the route is the same ('/'), just the parameter (the id) is different. The result: no update!

__[[UPDATE (11:06):]]__ After reading a little reddit, the solution seems to be the
[invalidate()](https://kit.svelte.dev/docs/modules#$app-navigation-invalidate)
function. From the official documentation:

> [The `invalidate()` function] causes any load functions belonging to the
> currently active page to re-run if they depend on the url in question, via
> fetch or depends. Returns a Promise that resolves when the page is
> subsequently updated.
>
> If the argument is given as a string or URL, it must resolve to the same URL
> that was passed to fetch or depends (including query parameters). To create a
> custom identifier, use a string beginning with [a-z]+: (e.g. custom:state) —
> this is a valid URL.


## 2023-01-24 16:50

- [x] ~~Implement the wireframes using Grid and Bulma~~

I did it! Responsive design took some heavy steps but they were all worth
the hard work. It looks simplistic but quite cool now.


## 2023-01-24 11:20

- [x] ~~Do wireframes for the Single View in Inkscape: Mobile, Tablet, Desktop~~

Went fine. All the outlining took only 10 minutes.


## 2023-01-23 20:41

- [x] ~~implement another fetch function for the Single View, in order to use it
      in its `onmount()` hook.~~

... And it all fell into place! All the preparation and hard work paid off
and I could implement the Single Page using the right helper and the right
types, and even Svelte's `{#async}` feature in the markup. What is more, 
with `{#async}` there was no more need for `onMount()`.

## 2023-01-23 15:12

Turned out that i NEEDED a store to pass the URL for the single page to the
Single Page component. Was a little harder than I thought because I also had to
adjust the TypeScript types and generate new ones. On the other hand, it was
absolutely worth it and a good repetition.

WHY was it necessary? Because the Edaman API returned a complete URL for the
single view, including the app ID and the app key. That's why.

## 2023-01-23 07:10

- [x] ~~provide a link to a `SingleView` component for each recipe~~
- [x] ~~implement a basic `SingleView` component.~~

Found out how to do slugs in SvelteKit the hard way. It's actually not hard,
only if you have to figure it out without a mentor. So to mentor myself in 
the future, here are the steps:

1. add a new directory `/src/[id]/`, where 'id' is the slug you need.
2. In `/app.d.ts`, adjust the `PageData` typescript interface to your needs.
   You can then import the types in your `.svelte` and `.ts` files like this:

```typescript
  import type { PageData } from './$types'
  export let data: PageData
```

3. In `/src/[id]/page.ts`, adjust the 'load()' function to your needs. It provides 
   the `data` you can use in your `.svelte` and `.ts` modules or an `error` if
   anything went wrong.


## 2023-01-19 07:58

- [x] ~~implement a basic `Recipes` list Component~~

I did it! And it worked from the start!

## 2023-01-19 07:24

- [x] ~~wire the request to the values of the form.~~

Done. When I implemented it, I had to update `buildURI()` because Edaman makes
a distinction between "health" and "diet" when it comes to assigning tasks to
an ingredient you are looking for. Annoying but there we are. 

## 2023-01-16 20:59

- [x] ~~implement basic request with the form, redirecting the output to the console~~

I made a little transformation to the raw data from the API; I extracted the 
data I need for the recipe list on the landing page. The raw data was so vast
and deep that I just had to simplify it.


## 2023-01-13 06:50

- [x] ~~migrate and integrate the `.env` file from the old project~~

I took an easier option and created `myConfigs.ts` inside my `$lib` directory.
Then I hid it from git (`.gitignore`) to keep the data private and left a
sample copy for any user to play with when they download and build the project
(`myConfigs.example.ts`).


## 2023-01-12 08:48

It's sad but true. I had to build this project from scratch again because
TypeScript was not integrated in the version I took from 
[SvelteAdd](https://github.com/svelte-add/). So the better (and
working!) way to do it goes like this:

```bash
  # after creating the SvelteKit project
  $ pnpx svelte-add@latest bulma scss
  $ pnpm install
```

This installs all the packages required and works. Lesson learned.

### UPDATE 09:18

- [x] ~~Add this project to GitHub~~

I could add this project seamlessly into GitHub after I
installed
[Github CLI](https://software.manjaro.org/package/github-cli) on this
Manjaro System. These are the steps I took:

```bash
  $ gh auth login   # login for the procedure; interactive
  $ gh repo create  # create Repo on Github  ; interactive
```

### UPDATE 09:49

- [x] ~~Add a better font for the project.~~
- [x] ~~Copy the Features from the deleted project.~~

Installed the _Poppins_ font from
[FontSource](https://fontsource.org/fonts/poppins), just by following
the instructions. Moreover, I migrated the features

### UPDATE 12:16

- [x] ~~migrate the helpers from the deleted project~~

Did exactly that. The migration is thereby finished.

### UPDATE 19:48

Just found out that in SvelteKit (which is managed by Vite), environment
variables must begin with `VITE_*` if we want to include them in our 
components using `$env/static/private` and Co. 
[This documentation](https://vitejs.dev/guide/env-and-mode.html#env-files)
explains what's going on.
