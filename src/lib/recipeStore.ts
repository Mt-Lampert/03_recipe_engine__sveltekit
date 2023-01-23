import type { RecipeInfo } from "./myTypes";
import { writable } from "svelte/store";

export const recipeInfo = writable({
  currentRecipes: [],
} as RecipeInfo)
