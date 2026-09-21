function calcReputation (likes , dislikes , editedMessages , totalMessages) {
  if (totalMessages === 0) {
    return 0;
  }
  const difference = likes - dislikes;
  if (dislikes >= likes) {
    return difference;
  }

  const notEditedMessages = totalMessages - editedMessages;
  const coefficient = notEditedMessages / totalMessages;

  return difference * coefficient;
}

console.log(calcReputation(3,5,2,8)); // -2
console.log(calcReputation(10,5,2,8)); // 3.75

console.log('Рупутация: ' + calcReputation(11,5,0,1) + '.'); // Репутация: 6.
