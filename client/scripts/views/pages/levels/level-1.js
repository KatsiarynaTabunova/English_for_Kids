import Component from '../../component';

import FirstLevelTemplate from '../../../../templates/pages/levels/level-1';


class FirstLevel extends Component {
    async render() {
        const level_1_Items = [{sound: '/sounds/family/mother.mp3', imageUrl: '/images/family/mother.jpg'}];

        const html = await FirstLevelTemplate({level_1_Items});

        // document.addEventListener('click', function(event) {
        //     if (event.target.classList.contains('sound')) {
        //         const audio = new Audio(event.target.dataset.sound);
        //         audio.play();
        //     }
        // });
        return html;
    }
}

export default FirstLevel;