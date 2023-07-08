/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let response = true;
  list.map((x) => {
    if (!set.has(x)) {
      response = false;
    }
  });

  return response;
}
