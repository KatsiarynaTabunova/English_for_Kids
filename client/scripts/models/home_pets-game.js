import Game from './game';

class HomePetsGame extends Game{
    constructor() {
        super();
        super.id = 2;
        super.gameName = 'Home Pats';
        super.url = '/images/home_pats/home_pats.jpg';
    }
    getGameItems() {
        return [{
            imageUrl: '/images/home_pats/cat.jpg',
            englishWord: 'Cat',
            russianWord: '(Кошка)',
            sound: '/sounds/home_pats/cat.mp3'
        },
            {
                imageUrl: '/images/home_pats/dog.jpg',
                englishWord: 'Dog',
                russianWord: '(Собака)',
                sound: '/sounds/home_pats/dog.mp3'
            },
            {
                imageUrl: '/images/home_pats/cow.jpg',
                englishWord: 'Cow',
                russianWord: '(Корова)',
                sound: '/sounds/home_pats/cow.mp3'
            },
            {
                imageUrl: '/images/home_pats/goose.jpg',
                englishWord: 'Goose',
                russianWord: '(Гусь)',
                sound: '/sounds/home_pats/goose.mp3'
            },
            {
                imageUrl: '/images/home_pats/sheep.jpg',
                englishWord: 'Sheep',
                russianWord: '(Овца)',
                sound: '/sounds/home_pats/sheep.mp3'
            },
            {
                imageUrl: '/images/home_pats/hen.jpg',
                englishWord: 'Hen',
                russianWord: '(Курица)',
                sound: '/sounds/home_pats/hen.mp3'
            },
            {
                imageUrl: '/images/home_pats/pig.jpg',
                englishWord: 'Pig',
                russianWord: '(Свинья)',
                sound: '/sounds/home_pats/pig.mp3'
            },
            {
                imageUrl: '/images/home_pats/horse.jpg',
                englishWord: 'Horse',
                russianWord: '(Лошадь)',
                sound: '/sounds/home_pats/horse.mp3'
            },
                        {
                imageUrl: '/images/home_pats/rabbit.jpg',
                englishWord: 'Rabbit',
                russianWord: '(Кролик)',
                sound: '/sounds/home_pats/rabbit.mp3'
            },
            {
                imageUrl: '/images/home_pats/turkey.jpg',
                englishWord: 'Turkey',
                russianWord: '(Индюк)',
                sound: '/sounds/home_pats/turkey.mp3'
            }
        ];
    }
}

export default HomePetsGame;