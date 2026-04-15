export default class TodoList {
    constructor() {
        this.todos = [];
    }
    // TODO: Implement addTodo method
    addTodo() {
        return this.todos.values;
    }
    // TODO: Implement removeTodo method
    removeTodo() {
        this.todos.remove();
    }
    // TODO: Implement toggleTodo method
    toggleTodo() {
        this.style.textDecoration = "line-through";
    }
}