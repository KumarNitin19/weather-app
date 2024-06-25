import { BULK_DATA_API_URL } from "../../env.contanst";

export async function fetchData(city) {
  const response = await fetch(BULK_DATA_API_URL + city);
  const data = await response.json();

  const newData = data?.list?.filter((val) => {
    const date = new Date(val.dt_txt).getDate();
    if (new Date().getDate() === date) {
      return val;
    }
  });
  return newData;
}
