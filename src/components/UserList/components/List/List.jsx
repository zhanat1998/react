function List({ users, deletUser }) {
    return (
        <ul>
            {users.map((i) => {
                return <li>
                    <span>{i.firstName}</span>
                    <br />
                    <span>{i.lastName}</span>
                    <br />
                    <span>{i.age}</span>
                    <button onClick={() => deletUser(i.id)}>Delete</button>
                </li>
            })}
        </ul>
    );
}

export default List;