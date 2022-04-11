/*
Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, 
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
function getObj(number) {
    const result = {};
    if (number > 999) return console.log('Too big number ' + result);
    result.hundred = Math.floor(number / 100);
    number %= 100;
    result.tens = Math.floor(number / 10);
    result.units = number % 10;
    return console.log(result);
}

getObj(-123456);

/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
const cart = {
    items: [
        { model: 'iphone', amount: 10, price: 100000, },
        { model: 'Samsung Galaxy', amount: 15, price: 90000, },
        { model: 'Xiaomi Redmi', amount: 20, price: 50000, },
        { model: 'Motorola E 398', amount: 25, price: 10000, }
    ],
    totalCart() {
        return this.items.reduce((total, element) => total += element.price * element.amount, 0);
    }
}

console.log(cart.totalCart());


