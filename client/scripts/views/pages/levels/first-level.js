import Component from '../../component';

import FirstLevelTemplate from '../../../../templates/pages/levels/first-level';

import RandomImagesTemplate from '../../../../templates/pages/levels/random-images';
import GameModel from '../../../models/game-model';

class FirstLevel extends Component {
    async render() {
        return await FirstLevelTemplate();
    }

    afterRender() {
        const blockImages = document.getElementsByClassName('container-level1__images')[0];
        const blockSound = document.getElementsByClassName('sound')[0];
        const buttonNextSound = document.getElementsByClassName('container-level1__button-switcher')[0];
        const gameItems = GameModel.getRandomGameItems();
        const correctGameItem = gameItems[0];
        let isGameActive = true;


        showRandomImages();
        const allImages = Array.from(document.getElementsByClassName('game-item__img'));

        function showRandomImages() {
            // blockImages.innerHTML = '';
            blockImages.innerHTML = RandomImagesTemplate({gameItems});

        }

        blockSound.addEventListener('click', () => {

            const audio = new Audio(correctGameItem.sound);
            audio.play();
        });

        blockImages.addEventListener('click', (event) => {
            if (!isGameActive) {
                return;
            }
            if (event.target.classList.contains('game-item__img')) {
                const selectedImage = event.target;

                if (selectedImage.getAttribute('src') === correctGameItem.imageUrl) {
                    selectedImage.classList.add('green');
                } else {
                    selectedImage.classList.add('red');
                    findCorrectGameItemImage().classList.add('green');
                }

                allImages.forEach(item => {
                    if (!item.classList.contains('green')) {
                        item.classList.add('disable');
                    }
                });

                isGameActive = false;
            }
        });
        buttonNextSound.addEventListener('click', () => {
            isGameActive = true;
            clearSelectedImages();
            allImages.forEach(item => item.classList.remove('disable'));
            // showRandomImages();

        });

        function findCorrectGameItemImage() {
            return allImages.find(item => item.getAttribute('src') === correctGameItem.imageUrl);
        }

        function clearSelectedImages() {
            allImages.forEach(item => item.classList.remove('red', 'green'));
        }
    }
}

export default FirstLevel;