let username = 'admin';
let balance = 5005;

if (username === 'admin') {
  console.log('Администратор');
} else if (username === '') {
  console.log('Гость');
} else if (balance > 5000) {
  console.log('Вип-клиент');
} else if (balance > 1000) {
  console.log('Постоянный покупатель');
}