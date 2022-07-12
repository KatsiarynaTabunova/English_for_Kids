import Component from '../../../views/component';

import Tasks from '../../../models/tasks';

import AddAndListTemplate from '../../../../templates/pages/tasks/add-list';
import TaskTemplate from '../../../../templates/pages/tasks/task';

class AddAndList extends Component {
    constructor() {
        super();

        this.model = Tasks;
    }

    async getData() {
        return await this.model.getTasksList();
    }

    async render(tasks) {
        return await AddAndListTemplate({tasks});
    }

    afterRender() {
        this.setActions();

        this.countTasksAmount();
    }

    setActions() {
        const taskTitleField = document.getElementsByClassName('task-add__title')[0],
            taskDescriptionField = document.getElementsByClassName('task-add__description')[0],
            addTaskBtn = document.getElementsByClassName('task-add__btn-add')[0],
            tasksContainer = document.getElementsByClassName('tasks')[0],
            clearTasksListBtn = tasksContainer.getElementsByClassName('tasks__btn-clear')[0],
            tasksList = tasksContainer.getElementsByClassName('tasks__list')[0];

        taskTitleField.onkeyup = () => addTaskBtn.disabled = !taskTitleField.value.trim();
        addTaskBtn.onclick = () => this.addTask(taskTitleField, taskDescriptionField, addTaskBtn,
                                                clearTasksListBtn, tasksList);

        tasksContainer.onclick = evt => {
            const target = evt.target,
                targetClassList = target.classList;

            switch (true) {
                case targetClassList.contains('tasks__btn-clear'):
                    this.clearTasksList(tasksList, clearTasksListBtn);
                    break;

                case targetClassList.contains('task'):
                case targetClassList.contains('task__title'):
                    this.redirectToTaskInfo(target.dataset.id);
                    break;

                case targetClassList.contains('task__btn-done'):
                    this.changeTaskStatus(target.parentNode.parentNode,
                                          target.previousElementSibling, target);
                    break;

                case targetClassList.contains('task__btn-remove'):
                    this.removeTask(tasksList, target.parentNode.parentNode, clearTasksListBtn);
                    break;
            }
        };
    }

    async addTask(taskTitleField, taskDescriptionField, addTaskBtn, clearTasksListBtn, tasksList) {
        let newTask = {
            title: taskTitleField.value.trim(),
            description: taskDescriptionField.value.trim()
        };

        newTask = await this.model.addTask(newTask);

        this.clearAddTask(taskTitleField, taskDescriptionField, addTaskBtn);
        clearTasksListBtn.disabled && (clearTasksListBtn.disabled = false);

        tasksList.insertAdjacentHTML('beforeEnd', await TaskTemplate({task: newTask}));

        this.countTasksAmount();
    }

    clearAddTask(taskTitleField, taskDescriptionField, addTaskBtn) {
        taskTitleField.value = '';
        taskDescriptionField.value = '';
        addTaskBtn.disabled = true;
    }

    countTasksAmount() {
        const tasksCounter = document.getElementsByClassName('tasks__counter')[0],
            totalAmount = document.getElementsByClassName('task').length,
            doneAmount = document.getElementsByClassName('task_done').length,
            toBeVerbForm = (doneAmount === 1) ? 'is' : 'are',
            taskWordForm = (doneAmount === 1) ? 'task' : 'tasks';

        tasksCounter.innerHTML = !totalAmount ?
            'Tasks list is empty' :
            `There ${toBeVerbForm} <span class="tasks__counter-done">${doneAmount}</span> ${taskWordForm} of ` +
            `<span class="tasks__counter-total">${totalAmount}</span> ${toBeVerbForm} done`;
    }

    async clearTasksList(tasksList, clearTasksListBtn) {
        if (confirm('Are you sure?')) {
            await this.model.clearTasksList();

            clearTasksListBtn.disabled = true;
            tasksList.innerHTML = '';

            this.countTasksAmount();
        }
    }

    redirectToTaskInfo(id) {
        location.hash = `#/task/${id}`;
    }

    async changeTaskStatus(taskContainer, editTaskBtn, doneTaskBtn) {
        await this.model.changeTaskStatus(taskContainer.dataset.id);

        taskContainer.classList.add('task_done');
        editTaskBtn.remove();
        doneTaskBtn.remove();

        this.countTasksAmount();
    }

    async removeTask(tasksList, taskContainer, clearTasksListBtn) {
        if (confirm('Are you sure?')) {
            await this.model.removeTask(taskContainer.dataset.id);

            taskContainer.remove();
            !tasksList.children.length && (clearTasksListBtn.disabled = true);

            this.countTasksAmount();
        }
    }
}

export default AddAndList;