# TODO

- [ ] Add this project to GitHub
- [ ] Add a better font for the project
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
  $ pnpx install
```

This installs all the packages required and works.
