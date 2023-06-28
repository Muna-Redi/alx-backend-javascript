export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const responses = mathFunction();
    queue.push(responses);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
