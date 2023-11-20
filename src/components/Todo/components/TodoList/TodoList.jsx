import { useState } from "react";
import { util } from "../../../../utils/index";
function TodoList({ users, deletUser, edit }) {

    return (
        <ul>
            {users.map((item) => {
                return <li>
                    <span>{item.firstName}</span>
                    <br />
                    <span>{item.lastName}</span>
                    <br />
                    <button onClick={() => deletUser(item.id)}>Delete</button>
                    <button onClick={() => {
                        console.log('object1: ', item)
                        edit(item)
                    }}>redaktirovat </button>
                </li>
            })}
        </ul>
    );
}

export default TodoList;