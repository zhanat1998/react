import { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import List from "./components/List/List";

function UserList() {
    const [users, setUsers] = useState([]);

    const deletUser = (id) => {
        setUsers((prevUsers) => prevUsers.filter((i) => i.id !== id));
    }

    return (
        <>
            <UserForm
                setUsers={setUsers}
            />
            <List
                users={users}
                deletUser={deletUser}
            />
        </>
    );
}

export default UserList;