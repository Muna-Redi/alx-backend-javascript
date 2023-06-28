export default function getFullResponseFromAPI(success) {
  successMessage = { status: 200, body: 'Success' });
  errorMessage = new Error('The fake API is not working currently');

  return new Promise((resolve, reject) => {
    if (success) {
      resolve(successMessage);
    } else {
      reject(errorMessage);
    }
  });
}
