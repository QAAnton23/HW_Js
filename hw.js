// Создал объект с тремя свойствами
const obj = {
    name: 'Anton',
    age: 25,
    hobby: 'Reading',

    // Вывод всех свойств
    getInfo: function() {
        let info = '';
        for (let key in this) {
            // Исключаем функции из списка
            if (typeof this[key] !== 'function') {
                info += `${key}: ${this[key]}\n`;
            }
        }
        console.log(info);
    }
};

//  getInfo до добавления новых свойств
obj.getInfo();

// новое свойство к объекту
obj.newProperty = 'Новое свойство!';

//  getInfo после добавления нового свойства
obj.getInfo();
