function reputation(likes, dislikes, edited_messages, total_messages) {
  if (total_messages === 0) {
    return 0;
  }

  let coefficient = (total_messages - edited_messages) / total_messages;

  if (dislikes > likes) {
    coefficient = 1;
  }

  let score = (likes - dislikes) * coefficient;
  return score;
}

console.log(reputation(13, 5, 4, 10));
console.log(reputation(12, 19, 13, 10));
console.log(reputation(0, 0, 0, 0));
