export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const [index, content] of Object.entries(reportWithIterator)) {
    result += `${content}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      result += ' | ';
    }
  }

  return result;
}
