import phones from "../../data/phoneCatalog";

//Load 10 items from JSON
export function fetchData(page) {
  const result = phones.slice(10 * (page - 1), 10 * page);
  return result;
}

//Get total number for pagination
export function countTotal() {
  const result = phones.length;
  return result;
}
