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
        let gameItems;
        let correctGameItem;
        let isGameActive = true;
        let allImages;

        showRandomImages();

        function showRandomImages() {
            gameItems = GameModel.getRandomGameItems();
            correctGameItem = gameItems[0];
            blockImages.innerHTML = RandomImagesTemplate({gameItems});

            allImages = Array.from(document.getElementsByClassName('game-item__img'));

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
                        console.log(findCorrectGameItemImage());
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
        }

        blockSound.addEventListener('click', () => {
            const audio = new Audio(correctGameItem.sound);
            audio.play();
        });

        buttonNextSound.addEventListener('click', () => {
            isGameActive = true;
            showRandomImages();
        });

        function findCorrectGameItemImage() {
            return allImages.find(item => item.getAttribute('src') === correctGameItem.imageUrl);
        }
    }
}

export default FirstLevel;