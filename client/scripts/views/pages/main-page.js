import Component from '../../views/component';

import AboutTemplate from '../../../templates/pages/main-template';

class MainPage extends Component {
    async render() {
        return await AboutTemplate();
    }
}

export default MainPage;