let user = 'admin';
let orderOwner = 'vorest';

if (user === 'admin' || user === orderOwner) {
    console.log('Редактирование разрешено');
} else {
    console.log('Заказ нельзя редактировать');
}