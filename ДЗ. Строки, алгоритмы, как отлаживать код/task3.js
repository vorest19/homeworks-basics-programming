let user = 'Killer2001';
if (user === 'admin') {
  console.log('Привет, админ!\n Проверь нет ли жалоб от пользователей!');
} else {
  console.log('Здравствуйте ' + user + '! У нас новые поступления халвы!');
}

let newOrders = 6;
let errorOrders = 3;
// показываем сколько новых заказов, а сколько заказов с ошибкой
if (newOrders > errorOrders) {
  console.log('В магазине ' + newOrders + ' новых заказов (с ошибкой: ' + errorOrders + ')');
}

if (newOrders === errorOrders) {
  console.log('ВНИМАНИЕ! Что-то идет не так! Все новые заказы завершились ошибкой!');
}