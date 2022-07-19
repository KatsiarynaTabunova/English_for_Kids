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
        const blockScore = document.getElementsByClassName('container-level1__score')[0];
        const buttonNewGame = document.getElementsByClassName('container-level1__new-game')[0];
        let gameItems;
        let correctGameItem;
        let isGameActive = true;
        let allImages;
        let rightAnswers = 0;
        let wrongAnswers = 0;

        showRandomImages();
        updateScore();

        function showRandomImages() {
            gameItems = GameModel.getRandomGameItems();
            correctGameItem = gameItems[Math.floor(Math.random() * gameItems.length)];
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
                        ++rightAnswers;
                        reproduceSoundRightAnswer();

                    } else {
                        selectedImage.classList.add('red');
                        findCorrectGameItemImage().classList.add('green');
                        ++wrongAnswers;
                        reproduceSoundWrongAnswer();
                    }

                    updateScore();

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
            playSound(correctGameItem.sound);
        });

        buttonNextSound.addEventListener('click', () => {
            isGameActive = true;
            showRandomImages();
        });

        buttonNewGame.addEventListener('click', () => {
            isGameActive = true;
            rightAnswers = 0;
            wrongAnswers = 0;
            updateScore();
            showRandomImages();

        });

        function findCorrectGameItemImage() {
            return allImages.find(item => item.getAttribute('src') === correctGameItem.imageUrl);
        }

        function updateScore() {
            blockScore.innerHTML = `Right answers:  ${rightAnswers} Wrong answers:  ${wrongAnswers}`;
        }

        function reproduceSoundRightAnswer() {
            playSound('sounds/sound_right_answer.mp3');
        }

        function reproduceSoundWrongAnswer() {
            playSound('sounds/sound_wrong_answer.mp3');
        }

        function playSound(src) {
            new Audio(src).play();
        }

    }
}

export default FirstLevel;