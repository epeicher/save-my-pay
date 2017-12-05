export function addSpending(spending) {
  console.log(JSON.stringify(spending));
  return Promise.resolve('added');
}
