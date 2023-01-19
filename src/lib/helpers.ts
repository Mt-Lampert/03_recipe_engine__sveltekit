import type { GridItem, ReqInfo, ResData } from "./myTypes";


function buildURI(args: ReqInfo) {
  const diets = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium",
  ];

  let tag = 'health';

  // for the query, some options in the diet dropdown require a
  // 'health' tag, some require a 'diet' tag
  if (diets.findIndex(myDiet => myDiet === args.diet) !== -1) { tag = "diet" }


  const uri = 'https://api.edamam.com/api/recipes/v2' +
    '?type=public' +
    `&app_id=${args.appID}&` +
    `&app_key=${args.appKey}&` +
    `${tag}=${args.diet}&` +
    `q=${args.ingr}`
  return encodeURI(uri)
}

/**
  * transforms raw API data into data for the recipe list
  * 
  * @param rawData the raw data from the API
  * @return data for the recipe list
  */
function getGridData(rawData: any): GridItem[] {
  const outData: GridItem[] = [];
  // console.dir(rawData)
  for (const item of rawData) {
    outData.push({
      id: item.recipe.uri.match(/_\w+/)[0],
      title: item.recipe.label,
      url: item._links.self.href,
      img: item.recipe.images["THUMBNAIL"].url,
    })
  }
  return outData;
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
      if (data.count === 0) throw new Error(errMsg);
      return {
        state: "success",
        payload: getGridData(data.hits),
        error: "",
      };
    })
    .catch((error) => ({
      state: "fail",
      payload: null,
      error: error,
    }));
}
