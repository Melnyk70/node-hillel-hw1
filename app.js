// У цьому файлі ви підключаєте модулі для перевірки їхньої роботи.
// Після перевірки модуль можна закоментувати, щоб його вивід не заважав.

// Перше завдання реалізовано як приклад підключення та виконання.
// Після ознайомлення можна або видалити підключення, або закоментувати його.

// Завдання розміщені у відповідних файлах.


// Task 01
import task_01 from './task_01.js';
console.log(task_01);

// Task 02
import task_02 from './task_02.js';
console.log(task_02(3, 7, 5));

// Task 03
import task_03 from './task_03.js';
console.log(task_03([-2, 0, 3, -1, 5]));

// Task 04
import { prepareString } from './task_04.js';
console.log(prepareString('   heLLo WoRLD   '));

// Task 05
import { randomSymbol } from './task_05.js';
console.log(randomSymbol('abcdef'));

// Task 06
import { integerPart } from './task_06.js';
console.log(integerPart(5.89));

// Task 07
import task_07 from './task_07/index.js';
console.log(task_07('abcd efjklsjdududdd')); // false
console.log(task_07('abcdefjklsjdududdd   ')); // true
console.log(task_07(' foo ')); // true
console.log(task_07(' f oo ')); // false

// Task 08
import task_08 from './task_08/index.js';
console.log(task_08('hello'));      // true
console.log(task_08('Hello'));      // false
console.log(task_08(''));           // true
console.log(task_08('abc123'));     // true (бо немає великих)

// Task 09
import { clearArray } from './task_09.js';
console.log(clearArray([1, 'a', true, null, 5, false]));

// Task 10
import task_10 from './task_10.js';
console.log(task_10([1, 2, 3, 4])); // [1, 4, 9, 16]