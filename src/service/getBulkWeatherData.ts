import { BULK_DATA_API_URL } from "../../env.contanst";

export async function fetchData(city) {
  const response = await fetch(BULK_DATA_API_URL + city);
  const data = await response.json();

  const newData = data?.list?.filter((val) => {
    const hours = new Date(val.dt_txt).getHours();
    if (hours <= 12 && hours >= 6) {
      return val;
    }
  });
  return newData;
}
