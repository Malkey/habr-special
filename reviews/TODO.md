# Второе тестовое задание «Reviews»

## Описание задания
Создайте одностраничное приложение, которое позволяет:  
1. Загружать список отзывов для одной компании через `redux-saga`.
2. Фильтровать отзывы:
    - По платформе (Google, Яндекс, 2ГИС).
    - По диапазону оценок (рейтинг от и до).
3. Сортировать отзывы:
    - По времени (новые/старые).
    - По оценке (по возрастанию/убыванию).
4. Отображать отфильтрованный и отсортированный список в табличной форме.

## Функциональность
1. Отображение таблицы отзывов с колонками:
    - Платформа.
    - Рейтинг.
    - Время добавления.
    - Текст отзыва.
2. Встроенные фильтры и сортировки, которые применяются без перезагрузки страницы.

## Пример данных
```js
const reviews = [
    {
        id: 1,
        platform: "Google",
        rating: 4,
        date: "2023-11-15T10:00:00Z",
        text: "Отличный сервис!",
    },
    {
        id: 2,
        platform: "Яндекс",
        rating: 3,
        date: "2023-11-14T09:00:00Z",
        text: "Хорошо, но есть недочеты.",
    },
    {
        id: 3,
        platform: "2ГИС",
        rating: 5,
        date: "2023-11-13T08:00:00Z",
        text: "Прекрасно!",
    },
];
```
## Требования
1. **Использование React:** функциональные компоненты с хуками.
2. **Redux и redux-saga:** управление состоянием отзывов, фильтрацией и сортировĸой.
3. **Логиĸа на фронте:** фильтрация и сортировĸа выполняются на ĸлиентсĸой стороне.
4. **Чистота кода:** понятная струĸтура проеĸта.

## Расширения (по желанию)
1. **Поиск:** реализуйте текстовый поиск по содержимому отзывов.
2. **Пагинация:** разбейте список отзывов на страницы.
3. **Обновление данных:** сделайте фунĸцию подгрузĸи новых отзывов в таблицу.