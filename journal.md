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
  $ pnpm install
```

This installs all the packages required and works.

__[UPDATE 09:18:]__ I could add this project seamlessly into GitHub after I
installed
[Github CLI](https://software.manjaro.org/package/github-cli) on this
Manjaro System. These are the steps I took:

```sh
  $ gh auth login   # login for the procedure; interactive
  $ gh repo create  # create Repo on Github  ; interactive
```

