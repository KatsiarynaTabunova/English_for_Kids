import Component from '../../views/component';

import HeaderTemplate from '../../../templates/partials/header';

class Header extends Component {
    async render() {
        // const dropdownButton = document.getElementsByClassName('dropdown__button')[0];
        // dropdownButton.addEventListener('click', function() {
        //     document.getElementsByClassName('dropdown__content').classList.add('show');
        // });
        return await HeaderTemplate({page: this.urlParts.page});
    }
}

export default Header;