let bonusBalance = 500;
let purchasesMonth = 2;
let standardRate = 10;
let premiumRate = 20;
let frequentPurchases = 5;

let finalRate = standardRate;

if (bonusBalance > 5000) {
  finalRate = premiumRate;
}

if (purchasesMonth > 1) {
  finalRate += frequentPurchases;
}

console.log('Процент от покупки: ' + finalRate);