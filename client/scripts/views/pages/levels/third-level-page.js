import Component from '../../component';
import ThirdLevelTemplate from '../../../../templates/pages/levels/third-level-template';

import GameItemAnswersTemplate from '../../../../templates/pages/levels/game-item-answers-template';
import GameItemOptionsTemplate from '../../../../templates/pages/levels/game-item-options-template';
import GameModel from '../../../models/game-model';
import {parseCurrentURL} from '../../../helpers/utils';


class ThirdLevelPage extends Component {
    async render() {
        const urlParts = parseCurrentURL();
        const game = await GameModel.getGameById(urlParts.id);
        const gameItemAnswers = await GameModel.getRandomGameItems(urlParts.id, 10);
        const gameItemOptions = await GameModel.getRandomGameItems(urlParts.id,10);


        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('third-level__field-sound')) {
                const audio = new Audio(event.target.dataset.sound);
                audio.play();
            }
        });
        return await ThirdLevelTemplate({game, gameItemAnswers, gameItemOptions});
    }

    async afterRender() {
        const blockAnswers = document.getElementsByClassName('third-level__list-answers')[0];
        const blockOptions = document.getElementsByClassName('third-level__list-options')[0];
        const buttonCheck = document.getElementsByClassName('third-level__check-button')[0];
        const blockRightAnswer = document.getElementsByClassName('third-level__check-score')[0];
        const blockMistakes = document.getElementsByClassName('third-level__check-mistakes')[0];
        const buttonStartAgain = document.getElementsByClassName('third-level__check-button-start')[0];
        let rightAnswers = 0;
        let mistakes = 0;

        await showRandom();
        updateScore();

        async function showRandom() {
            const urlParts = parseCurrentURL();
            const gameItemAnswers = await GameModel.getRandomGameItems(urlParts.id, 10);
            const gameItemOptions = await GameModel.getRandomGameItems(urlParts.id,10);
            blockAnswers.innerHTML = GameItemAnswersTemplate({gameItemAnswers});
            blockOptions.innerHTML = GameItemOptionsTemplate({gameItemOptions});
        }

        buttonCheck.addEventListener('click', function() {
            resetScore();

            const fieldsArr = document.getElementsByClassName('third-level__field');

            for (const field of fieldsArr) {
                const imageFieldArr = field.getElementsByClassName('third-level__list-options-image');

                if (imageFieldArr.length > 0) {
                    const currentImageUrl = imageFieldArr[0].getAttribute('src');
                    const rightImageUrl = field.dataset.imageurl;

                    if (currentImageUrl === rightImageUrl) {
                        field.classList.add('green');
                        rightAnswers++;
                        updateScore();
                    } else {
                        field.classList.add('red');
                        mistakes++;
                        updateScore();
                    }
                }
            }
        });

        buttonStartAgain.addEventListener('click', function() {
            resetScore();
            showRandom();
        });

        function updateScore() {
            blockRightAnswer.innerHTML = `Правильно: <span class = 'right'>${rightAnswers} / 10</span>`;
            blockMistakes.innerHTML = `Ошибки: <span class = 'wrong'>${mistakes}</span>`;
        }

        function resetScore() {
            rightAnswers = 0;
            mistakes = 0;
            updateScore();
        }

        const answerParentFieldsMap = new Map();
        document.onmousedown = function(event) {
            if (event.target.classList.contains('third-level__list-options-image')) {
                let draggableImage = event.target;
                const nextSibling = draggableImage.nextSibling !== null ? draggableImage.nextSibling.nextSibling : null;
                const imageInitState = {
                    nextSibling: nextSibling,
                    left: draggableImage.left || '',
                    top: draggableImage.top || '',
                    zIndex: draggableImage.zIndex || ''
                };
                draggableImage.classList.add('absolute');
                moveImage(event, draggableImage);

                draggableImage.style.zIndex = 1000;

                document.onmousemove = function(event) {
                    moveImage(event, draggableImage);
                };

                draggableImage.onmouseup = function() {
                    document.onmousemove = null;
                    draggableImage.onmouseup = null;
                    const targetParentField = findTargetField(event, draggableImage);

                    if (targetParentField === null) {
                        rollback(draggableImage, imageInitState);

                    } else {
                        const targetField = targetParentField.getElementsByClassName('third-level__field-image')[0];
                        targetField.appendChild(draggableImage);
                        draggableImage.classList.remove('absolute');

                        answerParentFieldsMap.set(draggableImage, targetParentField);
                    }
                };
                draggableImage.ondragstart = function() {
                    return false;
                };

            }
        };

        function moveImage(event, image) {
            image.style.left = `${event.pageX - image.offsetWidth / 2}px`;
            image.style.top = `${event.pageY - image.offsetHeight / 2}px`;
        }

        function rollback(draggableImage, imageInitState) {

            if (imageInitState.nextSibling !== null) {
                blockOptions.insertBefore(draggableImage, imageInitState.nextSibling);
            } else {
                answerParentFieldsMap.get(draggableImage).classList.remove('red', 'green');
                blockOptions.appendChild(draggableImage);
            }
            draggableImage.classList.remove('absolute');
            draggableImage.style.left = imageInitState.left;
            draggableImage.style.top = imageInitState.top;
            draggableImage.style.zIndex = imageInitState.zIndex;

        }

        function findTargetField(event, image) {
            const imageRect = image.getBoundingClientRect();
            const targetFields = document.getElementsByClassName('third-level__field');

            for (const targetField of targetFields) {
                if (areRectanglesIntercepted(imageRect, targetField.getBoundingClientRect())) {
                    if (targetField.getElementsByClassName('third-level__list-options-image').length === 0) {
                        return targetField;
                    }
                }
            }
            return null;
        }

        function areRectanglesIntercepted(rect1, rect2) {
            return rect1.bottom > rect2.top
                && rect1.right > rect2.left
                && rect1.top < rect2.bottom
                && rect1.left < rect2.right;
        }

    }
}

export default ThirdLevelPage;