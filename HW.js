
function pow(x, y) {
    let result = 1;  // Тут я инициализирую перемунную
    for (let i = 0; i < y; i++) {  // процесс повторяю Y раз
        result = result * x;  // Умножаю результат на x 
    }
    return result;  // Возвращаем результат но console.log не могу вывести не знаю куда вставить
                    // и не понимаю правильно сделал или нет так как не вижу результат
                    // по идее консоль же должна дать мне ответ? Какую цыфру я получу, правильно?
}
