# TODO

- [ ] Copy the Features from the deleted project.
- [ ] migrate the helpers from the deleted project


# JOURNAL

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

This installs all the packages required and works.

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

Installed the _Poppins_ font from
[FontSource](https://fontsource.org/fonts/poppins), just by following
the instructions.

