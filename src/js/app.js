// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default class Validator {//создаём класс
  constructor(name) {//конструктор с параметром
    this.name = name;//объявляем свойство
  }
  validateUsername(userName) {//создаём метод
    const re = /^(?!(.*\d){3})[^\-_][^\d][a-z\-_0-9]+[^\-_0-9]+$/i;//шаблон проверки
      return re.test(userName);//возвращаем значение проверки
    }
  }