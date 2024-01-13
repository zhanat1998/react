import { useState } from "react";

// import AddTodo from ".mponents/AddTodo/AddTodo";
import List from "./components/List/List";
import AddTodo from "./components/AddTodo/AddTodo";

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const [editableTask, setEditableTask] = useState(null);

    const [title, setTitle] = useState('');
    const [descriprion, setDescriprion] = useState('');

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }

    const editTask = (task) => {
        const { title, descriprion } = task;
        setTitle(title);
        setDescriprion(descriprion);
        setEditableTask(task);
    }

    return (
        <>
            <AddTodo
                title={title}
                setTitle={setTitle}
                descriprion={descriprion}
                setDescriprion={setDescriprion}
                editableTask={editableTask}
                setEditableTask={setEditableTask}
                setTasks={setTasks}
            />
            <List
                tasks={tasks}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        </>
    );
}

export default TodoList;