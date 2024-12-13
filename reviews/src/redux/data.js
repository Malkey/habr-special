const getRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
    // 0..max
};

const getRandomDate = () => {
    const start = new Date('2020-01-01').getTime();
    const end = Date.now();
    const randomDate = start + Math.random() * (end - start);
    return new Date(randomDate);
};

const getRandomPlatform = () => {
    const platforms = ['Google', 'Яндекс', '2ГИС'];
    const randomIndex = getRandomInt(2);
    return platforms[randomIndex];
};

const getReviewText = (rating) => {
    const texts = {
        1: 'Невозможно пользоваться!',
        2: 'Есть над чем поработать.',
        3: 'Хорошо, но есть недочеты.',
        4: 'Очень хорошо!',
        5: 'Прекрасно! Отличный сервис!',
    };
    return texts[rating];
};

const getReview = () => {
    const id = self.crypto.randomUUID();
    const platform = getRandomPlatform();
    const rating = getRandomInt(4) + 1;
    const date = getRandomDate();
    const text = getReviewText(rating);

    return { id, platform, rating, date, text };
};

const generateReviews = (num) => [...Array(num)].map(() => getReview());

const reviews = generateReviews(100);

export default reviews;