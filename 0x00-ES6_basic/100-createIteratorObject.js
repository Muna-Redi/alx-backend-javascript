export default function createIteratorObject(report) {
  const newarray = [];
  for (const content of Object.values(report.allEmployees)) {
    newarray.push(...content);
  }

  return newarray;
}
