function checkProbabilityTheory(count) {
    
    let evenCount = 0;  // Тут счетные числа (счетчик)
    let oddCount = 0;   // Тут не счетные числа
  
    //  генерируем случайные числа
    for (let i = 0; i < count; i++) {
      // Генерируем случайное число  от 100 до 1000 (включительно)
      let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  
      // Проверяем, четное ли число
      if (randomNumber % 2 === 0) {
        evenCount++;  // если четное то увеличиваем 
      } else {
        oddCount++;   // если нечетное то увеличиваем счетчик нечетных
      }
    }
  
   
    let evenPercentage = (evenCount / count) * 100; // процент четных чисел
    let oddPercentage = (oddCount / count) * 100;   // процент нечетных чисел
  
    // Выводим результаты
    console.log("Количество сгенерированных чисел: " + count);
    console.log("Четных чисел: " + evenCount);
    console.log("Нечетных чисел: " + oddCount);
    console.log("Процент четных чисел: " + evenPercentage.toFixed(2) + "%");
    console.log("Процент нечетных чисел: " + oddPercentage.toFixed(2) + "%");
  }
  
// тут увидим результат в консоли, в среднем % = Процент четных чисел: 49.80%
// Процент нечетных чисел: 50.20% (данные из консли) так что +- 50%
  checkProbabilityTheory(1000);
  