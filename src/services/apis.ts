import Axios from "axios";
const camelcaseKeys = require("camelcase-keys");

Axios.defaults.baseURL = "https://api.spacexdata.com/v3";

export const fetchLaunches = async (query?: string) => {
  const res = await Axios.get(`/launches?limit=30${query}`);
  return camelcaseKeys(res.data, { deep: true });
};
