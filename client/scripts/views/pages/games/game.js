import Component from '../../component';

import GameTemplate from '../../../../templates/pages/games/game';


class Game extends Component {
    async render() {
        const gameItems = [{imageUrl: '/images/family/mother.jpg', word: 'Mother', sound: '/sounds/family/mother.mp3'},
            {imageUrl: '/images/family/father.jpg', word: 'Father', sound: '/sounds/family/father.mp3'},
            {imageUrl: '/images/family/parents.jpg', word: 'Parents', sound: '/sounds/family/parents.mp3'},
            {imageUrl: '/images/family/son.jpg', word: 'Son', sound: '/sounds/family/son.mp3'},
            {imageUrl: '/images/family/daughter.jpg', word: 'Daughter', sound: '/sounds/family/daughter.mp3'},
            {imageUrl: '/images/family/granny.jpg', word: 'Grandmother', sound: '/sounds/family/grandmother.mp3'},
            {imageUrl: '/images/family/grandad.jpg', word: 'Grandfather', sound: '/sounds/family/grandfather.mp3'},
            {imageUrl: '/images/family/family.jpg', word: 'Family', sound: '/sounds/family/family.mp3'},
            {imageUrl: '/images/family/brother.jpg', word: 'Brother', sound: '/sounds/family/brother.mp3'},
            {imageUrl: '/images/family/sister.jpg', word: 'Sister', sound: '/sounds/family/sister.mp3'}
        ];

        const html = await GameTemplate({gameItems});

        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('sound')) {
                console.log(event.target.dataset.sound);
                const audio = new Audio(event.target.dataset.sound);
                audio.play();
            }
        });
        return html;
    }
}

export default Game;