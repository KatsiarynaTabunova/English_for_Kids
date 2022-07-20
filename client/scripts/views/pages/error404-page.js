import Component from '../../views/component';

import Error404Template from '../../../templates/pages/error404-template';

class Error404Page extends Component {
    async render() {
        return await Error404Template();
    }
}

export default Error404Page;