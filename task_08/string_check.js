export default function (str) {
    if (str === '') return true;
    return str === str.toLowerCase();
}