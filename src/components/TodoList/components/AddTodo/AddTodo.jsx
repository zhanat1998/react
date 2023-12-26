import { util } from "../../../../utils/index";
import s from "./styles.module.css";

function AddTodo({
    title,
    setTitle,
    descriprion,
    setDescriprion,
    editableTask,
    setEditableTask,
    setTasks
}) {
    const onSubmit = (e) => {
        e.preventDefault();
        const todo = util(e.target);
        if (!todo.title || !todo.descriprion) {
            alert('Все поля обязательны для заполения!');
            return;
        };

        if (editableTask) {
            setTasks((prev) => prev.map((task) => task.id === editableTask.id ? { ...todo, id: editableTask.id } : task));
            setEditableTask(null);
        } else {
            setTasks((prev) => [...prev, { ...todo, id: Math.random() }]);
        }

        setTitle('');
        setDescriprion('');
    }

    return (
        <form className={s.todoForm} onSubmit={onSubmit}>
            <label>
                <span className={s.label}>Название задачи</span>
                <br />
                <input
                    className={s.input}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    type="text"
                />
            </label>
            <label>
                <span className={s.label}>Описание задачи</span>
                <br />
                <input
                    className={s.input}
                    value={descriprion}
                    onChange={(e) => setDescriprion(e.target.value)}
                    name="descriprion"
                    type="text"
                />
            </label>
            <button className={editableTask ? s.editTodo : s.addTodo}>{editableTask ? 'Сохранить' : 'Добавить'}</button>
        </form>
    );
}

export default AddTodo;