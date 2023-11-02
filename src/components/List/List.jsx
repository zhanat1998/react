function List(props) {
    // console.log(props, '>>>>>>>>')
    return <ul>
        {/* <li>{props.count}</li>
        <li>item 2</li>
        <li>item 3</li> */
            props.arr.map(i => {
                return <li>{i}

                </li>



            })}
    </ul>
}

export default List;