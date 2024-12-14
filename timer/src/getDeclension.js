export const getDeclension = (number, words) => {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
        return words[2]; // Для 11-19
    } else if (lastDigit === 1) {
        return words[0]; // Для 1
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return words[1]; // Для 2, 3, 4
    } else {
        return words[2];
    }
};