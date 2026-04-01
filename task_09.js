// Task 09

// Створіть модуль clearArray, який приймає масив (array) як аргумент і повертає новий масив, у якому залишаються лише елементи типів number та boolean.

export function clearArray(array) {
    return array.filter(item => typeof item === 'number' || typeof item === 'boolean');
}