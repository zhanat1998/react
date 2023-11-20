import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function Todo() {
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('')
    const [editTodo, setEditTodo] = useState(null);

    const edit = (item) => {
        // setValue()
        console.log(item);
        setValue(item.firstName)
        setValue2(item.lastName)
        setEditTodo(item)

    }
    const deletUser = (id) => {
        setUsers((prevUsers) => prevUsers.filter((i) => i.id !== id));
    }

    return (
        <>
            <TodoForm
                setUsers={setUsers}
                value={value}
                value2={value2}
                setValue={setValue}
                setValue2={setValue2}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
            />
            <TodoList
                users={users}
                deletUser={deletUser}
                edit={edit}

            />
        </>
    );
}

export default Todo;