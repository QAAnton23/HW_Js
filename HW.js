// Создал объект с услугами
const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

// Метод для вычисления общей стоимости услуг
services.price = function() {
    let total = 0;
    for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
            total += parseInt(this[key]); // строка в число ( преобразуем)
        }
    }
    return total + ' грн';
};

// Находим минимальную цену
services.minPrice = function() {
    let prices = [];
    for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
            prices.push(parseInt(this[key]));
        }
    }
    return Math.min(...prices) + ' грн';
};

// Находим максимальную цену
services.maxPrice = function() {
    let prices = [];
    for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
            prices.push(parseInt(this[key]));
        }
    }
    return Math.max(...prices) + ' грн';
};

// Тестируем 
console.log("Общая стоимость услуг:", services.price());
console.log("Минимальная цена:", services.minPrice());
console.log("Максимальная цена:", services.maxPrice());

// Добавляем новую услугу
services['Розбити скло'] = "200 грн";

// Повторно тестируем после добавления новой услуги
console.log("Общая стоимость услуг (после добавления):", services.price());
console.log("Минимальная цена (после добавления):", services.minPrice());
console.log("Максимальная цена (после добавления):", services.maxPrice());
