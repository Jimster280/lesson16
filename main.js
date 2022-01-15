'use strict'

class First {
  constructor(number){
    this.number = number;
  }
  hello() {
    console.log('Привет я метод родителя!');
  }
}

class Second extends First {
  constructor(number, count = 0){
    super(number)
    this.count = count;
  }
  hello() {
    super.hello();
    console.log('А я наследуемый метод!');
  }
}

const first = new First(1);
const second = new Second(2);

second.hello();