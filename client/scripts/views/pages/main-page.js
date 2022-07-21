import Component from '../../views/component';

import MainTemplate from '../../../templates/pages/main-template';

class MainPage extends Component {
    async render() {
        return await MainTemplate();
    }
}

export default MainPage;