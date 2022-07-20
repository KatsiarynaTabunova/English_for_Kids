import Game from './game';

class FamilyGame extends Game{
    constructor() {
        super();
        super.id = 1;
        super.gameName = 'Family';
        super.url = '/images/family/family.jpg';
    }
    getGameItems() {
        return [{
            imageUrl: '/images/family/mother.jpg',
            englishWord: 'Mother',
            russianWord: '(Мама)',
            sound: '/sounds/family/mother.mp3'
        },
            {
                imageUrl: '/images/family/father.jpg',
                englishWord: 'Father',
                russianWord: '(Папа)',
                sound: '/sounds/family/father.mp3'
            },
            {
                imageUrl: '/images/family/parents.jpg',
                englishWord: 'Parents',
                russianWord: '(Родители)',
                sound: '/sounds/family/parents.mp3'
            },
            {
                imageUrl: '/images/family/son.jpg',
                englishWord: 'Son',
                russianWord: '(Сын)',
                sound: '/sounds/family/son.mp3'
            },
            {
                imageUrl: '/images/family/daughter.jpg',
                englishWord: 'Daughter',
                russianWord: '(Дочка)',
                sound: '/sounds/family/daughter.mp3'
            },
            {
                imageUrl: '/images/family/granny.jpg',
                englishWord: 'Grandmother',
                russianWord: '(Бабушка)',
                sound: '/sounds/family/grandmother.mp3'
            },
            {
                imageUrl: '/images/family/grandad.jpg',
                englishWord: 'Grandfather',
                russianWord: '(Дедушка)',
                sound: '/sounds/family/grandfather.mp3'
            },
            {
                imageUrl: '/images/family/family.jpg',
                englishWord: 'Family',
                russianWord: '(Семья)',
                sound: '/sounds/family/family.mp3'
            },
            {
                imageUrl: '/images/family/brother.jpg',
                englishWord: 'Brother',
                russianWord: '(Брат)',
                sound: '/sounds/family/brother.mp3'
            },
            {
                imageUrl: '/images/family/sister.jpg',
                englishWord: 'Sister',
                russianWord: '(Сестра)',
                sound: '/sounds/family/sister.mp3'
            }
        ];
    }
}

export default FamilyGame;