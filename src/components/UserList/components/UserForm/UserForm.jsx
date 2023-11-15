import { useState } from "react";
import { util } from "../../../../utils/index";

function UserForm({ setUsers }) {
    const [errorFirstName, setErroFirstName] = useState(false);
    const onSunmit = (e) => {
        e.preventDefault();
        console.log(util(e.target));
        setUsers((prevUsers) => [...prevUsers, { ...util(e.target), id: prevUsers.length }]);
    }
    return (
        <form onSubmit={onSunmit}>
            <label>
                <span>First Name</span>
                <br />
                <input className={errorFirstName ? '' : ''} name="firstName" type="text" />
            </label>
            <br />
            <label>
                <span>Last Name</span>
                <br />
                <input name="lastName" type="text" />
            </label>
            <br />
            <label>
                <span>Age</span>
                <br />
                <input name="age" type="number" />
            </label>
            <br />
            <button>Add User</button>
        </form>
    );
}

export default UserForm;