// TODO: write your code here
// import sum from './basic';
//
// console.log('worked');
//
// console.log(sum([1, 2]));

//=============================================
//входные данные
const expectName = "Anna";

class Validator {
  constructor(name) {
    this.name = name;
  }
  validateUsername(userName) {
    const re = /^[^A-Za-z0-9]$/
      console.log(re.test(userName))
      return re.test(userName);
    }
  }

const checkName = new Validator(expectName);
checkName.validateUsername(expectName)
// ==================================================
// export default class Validator {
//   constructor(name) {
//     this.name = name;
//   }
//
//   validateUsername(userName) {
//     const re = /^(?!(.*\d){4})[^\-_][^\d][a-z\-_0-9]+[^\-_0-9]+$/i;
//     return re.test(userName);
//   }
// }