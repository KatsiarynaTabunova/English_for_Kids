import Component from '../../views/component';

import HeaderTemplate from '../../../templates/partials/header';

class Header extends Component {
    async render() {
        return await HeaderTemplate({page: this.urlParts.page});
    }
}

export default Header;