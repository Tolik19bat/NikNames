import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

//===============================================================

import Validator from '../app';//импортируем класс
const validator = new Validator();//присваеваем объявление класса

test('Допустимы только латинские буквы', () => {// тест
  const result = validator.validateUsername('Анна');//используя метод из класса
  expect(result).toBe(false)//проверяем соответствие
});

test('Имя не может содерать более трех цифр', () => {//тест
  const result = validator.validateUsername('Anna5555Anna');//используя метод
  expect(result).toBe(false)//проверяем соответствие
});

test('Имя не может начинаться с цифр', () => {//тест
  const result = validator.validateUsername('55Anna');//используя метод из класса
  expect(result).toBe(false)//проверяем соответствие
});

test('Имя не может заканчиваться цифрами', () => {//тест
  const result = validator.validateUsername('Anna55');//используя метод из класса
  expect(result).toBe(false)//проверяем соответствие
});

test('Имя не может начинаться с символа тире', () => {//тест
  const result = validator.validateUsername('-Anna');//используя метод из класса
  expect(result).toBe(false)//проверяем соответствие
});

test('Имя не может заканчиваться символом тире', () => {//тест
  const result = validator.validateUsername('Anna-');//используя метод из класса
  expect(result).toBe(false)//проверяем соответствие
})

test('Имя не может начинаться с символа нижнее подчёркивание', () => {//тест
  const result = validator.validateUsername('_Anna');//используя метод из класса
  expect(result).toBe(false)//проверяем соответствие
})

test('Имя не может заканчиваться символом нижнее подчёркивание', () => {//тест
  const result = validator.validateUsername('Anna_');//используя метод из класса
  expect(result).toBe(false);//проверяем соответствие
});