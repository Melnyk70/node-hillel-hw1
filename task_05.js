// Task 05

// Створіть іменований модуль randomSymbol, який отримує рядок і повертає випадковий символ з цього рядка.
// Якщо передано порожній рядок — повертає порожній рядок.

export function randomSymbol(str) {
    if (str === '') {
        return '';
    }

    const index = Math.floor(Math.random() * str.length);
    return str[index];
}