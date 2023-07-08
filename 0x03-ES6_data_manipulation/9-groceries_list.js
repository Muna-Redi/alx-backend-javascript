export default function groceriesList() {
  const finalMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const grocerylist = Array.from(Object.keys(obj));

  grocerylist.map((item) => finalMap.set(item, obj[item]));
  return finalMap;
}
