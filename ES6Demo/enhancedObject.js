const temp = {
  a: "aaa",
  b: "bbb"
};

const {
  a,
  b
} = temp;

console.log(`a: ${a}`);
console.log(`b: ${b}`);

/*const temp2 = {
  a: "a2",
  b: "b2"
}

const {
  a : a2,
  b : b2
} = temp2;

console.log(`a2: ${a2}`);
console.log(`b2: ${b2}`);*/

/*
import utils from './utils';
import {
  helloFunc,
  wowFunc
} from './utils';
import * as utilsManager from './utils';

utils();
console.log(`helloFunc: ${helloFunc('Tom')}`);
console.log(`wowFunc: ${wowFunc('Tom')}`);

console.log('==================');
utilsManager.default();
console.log(`utilsManager.helloFunc:`);
 utilsManager.helloFunc('Tom')
console.log(`utilsManager.wowFunc: `);
utilsManager.wowFunc('Tom');*/
