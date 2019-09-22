const camelToSnake = (value: string) => value.replace(/([A-Z])/g, "_$1").toLowerCase();

export const stringifyQueryObj = (queryObj: any) => {
  const queryArray = Object.keys(queryObj).map((q: any) => `&${camelToSnake(q)}=${queryObj[q]}`);
  return queryArray.join("");
};
