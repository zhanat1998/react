import { useState } from "react";
import { util } from "../../../../utils/index";

function TodoForm({ setUsers, value, value2, setValue, setValue2, editTodo, setEditTodo }) {
    const [errorFirstName, setErroFirstName] = useState(false);
    const onSunmit = (e) => {
        e.preventDefault();
        if (editTodo) {
            setUsers((prev) => prev.map((i) => {
                if (i.id === editTodo.id) {
                    return {
                        ...i,
                        firstName: value,
                        lastName: value2
                    }
                } else {
                    return i;
                }
            }))
            setEditTodo(null);
        } else {
            setUsers((prevUsers) => [...prevUsers, { ...util(e.target), id: prevUsers.length }]);
        }
        setValue('')
        setValue2('')
    }
    return (
        <form onSubmit={onSunmit}>
            <label>
                <span>First Name</span>
                <br />
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value} className={errorFirstName ? '' : ''} name="firstName" type="text" />
            </label>
            <br />
            <label>
                <span>Last Name</span>
                <br />
                <input
                    onChange={(e) => setValue2(e.target.value)}
                    value={value2} name="lastName" type="text" />
            </label>
            <br />

            <button>Add User</button>
        </form>
    );
}

export default TodoForm;