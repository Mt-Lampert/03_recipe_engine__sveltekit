import type { ReqInfo, ResData } from "./myTypes";


function buildURI(args: ReqInfo) {
  const uri = 'https://api.edamam.com/api/recipes/v2' +
    '?type=public' +
    `&app_id=${args.appID}&` +
    `&app_key=${args.appKey}&` +
    `health=${args.diet}&` +
    `q=${args.ingr}`
  return encodeURI(uri)
}

/**
  * gets the recipes from the edaman server
  * 
  * @param args arguments needed for the URL
  * @returns a promise with the data from the server or an error message
  */
export function getRecipes(args: ReqInfo): Promise<ResData> {
  const url = buildURI(args)
  const errMsg = `404 -- No data available`;

  return fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      // else:
      throw new Error(errMsg);
    })
    .then((data) => {
      if (data.items.length === 0) throw new Error(errMsg);

      return {
        state: "success",
        payload: data,
        error: "",
      };
    })
    .catch((error) => ({
      state: "fail",
      payload: null,
      error: error,
    }));
}
