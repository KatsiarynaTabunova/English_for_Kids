import Component from '../../component';
import ThirdLevelTemplate from '../../../../templates/pages/levels/third-level-template';

import GameModel from '../../../models/game-model';
import {parseCurrentURL} from '../../../helpers/utils';


class ThirdLevelPage extends Component {
    async render() {
        const urlParts = parseCurrentURL();
        const game = GameModel.getGameById(urlParts.id);
        const gameItems = game.getGameItems();

        document.addEventListener('click', function (event) {
            if (event.target.classList.contains('third-level__field-sound')) {
                const audio = new Audio(event.target.dataset.sound);
                audio.play();
            }
        });
        return await ThirdLevelTemplate({game, gameItems});
    }

    afterRender() {

        document.onmousedown = function (event) {
            if (event.target.classList.contains('third-level__list-options-image')) {
                let draggableImage = event.target;
                var imageInitState = {
                    parent: draggableImage.parentNode,
                    nextSibling: draggableImage.nextSibling.nextSibling,
                    left: draggableImage.left || '',
                    top: draggableImage.top || '',
                    zIndex: draggableImage.zIndex || ''
                };
                draggableImage.classList.add('absolute');
                moveImage(event, draggableImage);

                draggableImage.style.zIndex = 1000;


                document.onmousemove = function (event) {
                    moveImage(event, draggableImage);
                };

                document.onmouseup = function () {
                    document.onmousemove = null;
                    draggableImage.onmouseup = null;
                    const targetParentField = findTargetField(event, draggableImage);
                    if (targetParentField === null) {
                        rollback(draggableImage, imageInitState);

                    } else {
                        const targetField = targetParentField.getElementsByClassName('third-level__field-image')[0];

                        targetField.appendChild(draggableImage);
                        draggableImage.classList.remove('absolute');
                    }
                };
                draggableImage.ondragstart = function () {
                    return false;
                };

            }
        };

        function moveImage(event, image) {
            image.style.left = event.pageX - image.offsetWidth / 2 + 'px';
            image.style.top = event.pageY - image.offsetHeight / 2 + 'px';
        }

        function rollback(draggableImage, imageInitState) {
            console.log(imageInitState);
            imageInitState.parent.insertBefore(draggableImage, imageInitState.nextSibling);
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