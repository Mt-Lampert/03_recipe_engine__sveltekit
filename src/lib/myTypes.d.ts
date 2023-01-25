export type GridItem = {
  id: string,
  title: string,
  url: string,
  img: string,
}

export type PageData = {
  id: string,
}

export type ReqInfo = {
  appID: string,
  appKey: string,
  ingr: string,
  diet: string,
}

export type ResData = {
  state: string,
  payload: any,
  error: string,
}

export type RecipeInfo = {
  currentRecipes: GridItem[],
}

export type SpageData = {
  title: string,
  img: string,
}
