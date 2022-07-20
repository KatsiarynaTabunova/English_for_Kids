import Component from '../../../views/component';

import Tasks from '../../../models/tasks';

import InfoTemplate from '../../../../templates/pages/tasks/info';
import Error404Template from '../../../../templates/pages/error404-template';

class Info extends Component {
    async getData() {
        return await Tasks.getTask(this.urlParts.id);
    }

    async render(task) {
        return await (!task.error ? InfoTemplate({task}) : Error404Template());
    }
}

export default Info;