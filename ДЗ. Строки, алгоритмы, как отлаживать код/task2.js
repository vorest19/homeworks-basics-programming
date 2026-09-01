let accountStatus = 'premium';
let username = 'Liza';
let cashbackPercentage;

if (accountStatus === 'vip') {
    cashbackPercentage = 30;
} else if (accountStatus === 'premium') {
    cashbackPercentage = 20;
} else if (accountStatus === 'extended') {
    cashbackPercentage = 15;
} else {
    cashbackPercentage = 10;
}

console.log(`${username} | ${accountStatus || 'regular'} аккаунт`);
console.log(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт`);