# TODO

- [ ] implement a basic `Recipes` list Component
- [ ] implement a basic `SingleView` component.
- [ ] implement another fetch function for the Single View,
      in order to use it in its `onmount()` hook.

# JOURNAL

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

```sh
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

```sh
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
