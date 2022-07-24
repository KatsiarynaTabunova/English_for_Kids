import Game from './game';

class NumbersGame extends Game{
    constructor() {
        super();
        super.id = 3;
        super.gameName = 'Numbers';
        super.url = '/images/numbers/all_numbers.jpg';
    }
    getGameItems() {
        return [{
            imageUrl: '/images/numbers/1.jpg',
            englishWord: 'One',
            russianWord: '(Один)',
            sound: '/sounds/numbers/1.mp3'
        },
            {
                imageUrl: '/images/numbers/2.jpg',
                englishWord: 'Two',
                russianWord: '(Два)',
                sound: '/sounds/numbers/2.mp3'
            },
            {
                imageUrl: '/images/numbers/3.jpg',
                englishWord: 'Three',
                russianWord: '(Три)',
                sound: '/sounds/numbers/3.mp3'
            },
            {
                imageUrl: '/images/numbers/4.jpg',
                englishWord: 'Four',
                russianWord: '(Четыре)',
                sound: '/sounds/numbers/4.mp3'
            },
            {
                imageUrl: '/images/numbers/5.jpg',
                englishWord: 'Five',
                russianWord: '(Пять)',
                sound: '/sounds/numbers/5.mp3'
            },
            {
                imageUrl: '/images/numbers/6.jpg',
                englishWord: 'Six',
                russianWord: '(Шесть)',
                sound: '/sounds/numbers/6.mp3'
            },
            {
                imageUrl: '/images/numbers/7.jpg',
                englishWord: 'Seven',
                russianWord: '(Семь)',
                sound: '/sounds/numbers/7.mp3'
            },
            {
                imageUrl: '/images/numbers/8.jpg',
                englishWord: 'Eight',
                russianWord: '(Восемь)',
                sound: '/sounds/numbers/8.mp3'
            },
                        {
                imageUrl: '/images/numbers/9.jpg',
                englishWord: 'Nine',
                russianWord: '(Девять)',
                sound: '/sounds/numbers/9.mp3'
            },
            {
                imageUrl: '/images/numbers/10.jpg',
                englishWord: 'Ten',
                russianWord: '(Десять)',
                sound: '/sounds/numbers/10.mp3'
            }
        ];
    }
}

export default NumbersGame;