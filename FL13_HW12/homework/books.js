const BookList = [
    {
        bookName: 'Обіцянка собаки',
        author: 'Брюс Кемерон',
        img: 'https://www.bookclub.ua/images/db/goods/53471_98145.jpg',
        plot: 'Кажуть, усі собаки потрапляють до раю. Особливо такі, як Бейлі.',
        uid: 1
    },
    {
        bookName: 'Інститут',
        author: 'Стівен Кінг',
        img: 'https://www.bookclub.ua/images/db/goods/53509_98748.jpg',
        plot: 'Тієї ночі почався кошмар. Батьків Люка вбили, а самого хлопця закинули...',
        uid: 2
    },
    {
        bookName: 'Галя без голови',
        author: 'Люко Дашвар',
        img: 'https://www.bookclub.ua/images/db/goods/53454_98763.jpg',
        plot: 'Благими намірами вимощений шлях до пекла. Галя сповна відчула сенс цього вислову.',
        uid: 3
    }
];

localStorage.setItem('BookList', JSON.stringify(BookList));