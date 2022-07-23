import Component from '../../component';
import ThirdLevelTemplate from '../../../../templates/pages/levels/third-level-template';

import GameModel from '../../../models/game-model';
import {parseCurrentURL} from '../../../helpers/utils';


class ThirdLevelPage extends Component {
    async render() {
        const urlParts = parseCurrentURL();
        const game = GameModel.getGameById(urlParts.id);
        const gameItems = game.getGameItems();

        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('third-level__field-sound')) {
                const audio = new Audio(event.target.dataset.sound);
                audio.play();
            }
        });
        return await ThirdLevelTemplate({game, gameItems});
    }

    afterRender() {

        document.onmousedown = function(event) {
            // let initX;
            // let initY;
            if (event.target.classList.contains('third-level__list-options-image')) {
                let draggableImage = event.target;
                draggableImage.classList.add('absolute');
                moveImage(event, draggableImage);

                // initX = draggableImage.style.left;
                // initY = draggableImage.style.top;

                draggableImage.style.zIndex = 1000;


                document.onmousemove = function(event) {
                    moveImage(event, draggableImage);
                    console.log('move');
                };

                document.onmouseup = function() {
                    console.log('up');
                    document.onmousemove = null;
                    draggableImage.onmouseup = null;
                    const targetParentField = findTargetField(event, draggableImage);
                    // if (targetParentField === null) {
                    //     console.log('go back');
                    // } else {
                    console.log('goood');
                    const targetField = targetParentField.getElementsByClassName('third-level__field-image')[0];

                    targetField.appendChild(draggableImage);
                    draggableImage.classList.remove('absolute');
                    // }
                };
                draggableImage.ondragstart = function() {
                    return false;
                };
            }
        };

        function moveImage(event, image) {
            image.style.left = event.pageX - image.offsetWidth / 2 + 'px';
            image.style.top = event.pageY - image.offsetHeight / 2 + 'px';
        }

        function findTargetField(event, image) {
            const imageRect = image.getBoundingClientRect();
            const targetFields = document.getElementsByClassName('third-level__field');

            for (const targetField of targetFields) {
                if (areRectanglesIntercepted(imageRect, targetField.getBoundingClientRect())) {

                    return targetField;
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