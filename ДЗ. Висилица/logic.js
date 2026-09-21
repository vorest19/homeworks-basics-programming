let answer = '';
let answerState = '';
let mistakesCount = 0;
let lettersState;
const symbolOfLetter = "*";

startGame();

function startGame() {
  /* 1. Сбросьте количество допущенных ошибок до нуля */
  mistakesCount = 0;

  /* 2. Сбросьте состояние клавиатуры в начальное состояние */
  lettersState = getDefaultKeyboard();

  /* 3. Отрисуйте начальное состояние игрового персонажа */
  drawPerson(mistakesCount);

  /* 4. Отрисуйте состояние клавиатуры */
  drawBoard(lettersState);

  /* 5. Сгенерируйте новое слово (с помощью generateWord) */
  generateWord();
}

function generateWord() {
  /* 1. Сгенерируйте целое число от 0 до длины массива dictionary */
  /* 2. По сгенерированному числу получите элемент из массива dictionary. Этот элемент запишите в переменную answer */
  answer = dictionary[Math.trunc(Math.random() * dictionary.length)];

  /* 3. Сгенерируйте строку с символами "*" длины сгенерированного слова. Полученная строка должна быть записана
  в answerState */
  answerState = symbolOfLetter.repeat(answer.length);
  /*
  Второй способ решения 3 пункта:
  answerState = "";
  for (let i = 0; i < answer.length; i++) {
    answerState += "*";
  }
  */
  /*
  Третий способ решения 3 пункта:
  answerState = new Array(answer.length).fill("*").join("");
  */

  /* 4. Отрисуйте начальное состояние отгаданного слова */
  drawAnswerState(answerState);
}

function onKeyClick(letter) {
  /*
  1. Проверьте проигрыш игры.
  1.1. Если количество ошибок равно 7, то выводите конец игры. Дополнительно можно выводить неотгаданное слово.
  1.2. Начинайте новую игру.
  1.3. Остальные действия выполняйте, если игра не закончена
  */
  if(mistakesCount === 7) {
    alert(`Проигрыш игры. Неотгаданное слово: ${answer}`);
    startGame();
    return;
  }

  /* 2. В состоянии клавиатуры (lettersState) найдите кликнутый символ (letter).
  Найденый символ сохраняйте в отдельную переменную (например letterFromState) */
  let letterFromState;
  for (let i = 0; i < lettersState.length; i++) {
    if(lettersState[i].char === letter) {
      letterFromState = lettersState[i];
      break;
    }
  }
  /* console.log(letterFromState); */
  /* Второй способ решения 2 пункта:
  let letterFromState = lettersState.find(item => item.char === letter);
  console.log(letterFromState);
  */

  /*
  3. Проверьте: отсутсвует ли кликнутый символ в ответе игры И не отмечен ли символ уже отмеченным как
  ошибочный (error)
  3.1. Увеличьте количество ошибок на 1
  3.2. Отметьте символ свойством `error`
  */
  if(!answer.includes(letter) && !letterFromState.error) {
    mistakesCount++;
    letterFromState.error = true;
  }

  /*
  4. Проверьте: присутсвует ли кликнутый символ в ответе игры И не отмечен ли символ уже отмеченным как успешный (success)
  4.1. Отметьте символ свойством success
  4.2. Измените необходимые символы "*" на кликнутый символ. Изменения необходимо выполнять только символов, у которых позиция в ответе совпадает с позицией состояния.
  Пример: 
  - Состояние игры: '**********'
  - Загаданное слово: "фотография"
  - Пользователь кликает на "о"
  - Состояние должно измениться на: '*о*о******'
  - Пользователь кликает на "ф"
  - Состояние должно измениться на: 'фо*о***ф**'
  - Пользователь кликает на "т"
  - Состояние должно измениться на: 'фото***ф**'
  */
  if(answer.includes(letter) && !letterFromState.success) {
    letterFromState.success = true;
    const answerLettersArray = answerState.split("");
    for (let i = 0; i < answer.length; i++) {
      if(answer[i] === letter) {
        answerLettersArray[i] = letter;
      }
    }
    answerState = answerLettersArray.join("");
 }

  /* 5. Перерисуйте состояние игрока с текущим количеством жизней */
  drawPerson(mistakesCount);

  /* 6. Перерисуйте состояние клавиатуры */
  drawBoard(lettersState);

  /* 7. Перерисуйте состояние отгаданного слова */
  drawAnswerState(answerState);

  /* 8. Проверьте, совпадает ли состояние отгаданного слова с ответом игры
  8.1. Отображайте победу игрока, если пользователь угадал слово
  */
  if(answer === answerState) {
    winGame();
  }
}
