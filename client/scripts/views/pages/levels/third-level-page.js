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
        // const mainContainer = document.getElementsByClassName('third-level__container')[0];
        // const fieldsBlock = document.getElementsByClassName('third-level__field-list')[0];
        // const currentImage = document.getElementsByClassName('third-level__list-options')[0];
        // const DragManager = new function() {

        document.onmousedown = function(event) {
            const draggableImage = event.target;

            if (draggableImage.classList.contains('third-level__list-options-image')) {
                draggableImage.style.position = 'absolute';
                draggableImage.style.border = '1px dashed black';
                moveImage(event, draggableImage);
                // document.body.appendChild(draggableImage);

                draggableImage.style.zIndex = 1000;

                document.onmousemove = function(event) {
                    moveImage(event, draggableImage);
                };
                document.onmouseup = function() {
                    document.onmousemove = null;
                    draggableImage.onmouseup = null;
                    findInputField(event, draggableImage);
                    draggableImage.style.border = 'none';
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

        // function finishDrag(event, image) {
        //     findInputField(event, image);
        // }

        function findInputField(event, image) {
            // image.hidden = true;
            // const elem = document.elementFromPoint(event.clientX, event.clientY);
            // image.hidden = false;
            // if (elem == null) {
            //     return null;
            // }
            console.log(image);
            console.log(image.closest('third-level__field'));
            return image.closest('.third-level__field');
        }

    }
}

export default ThirdLevelPage;