import { useState, useEffect } from 'react';
import styles from './List.module.css';

function List({ arr2, arr, ...props }) {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('gray');

    useEffect(() => {
        setColor((prevColor) => prevColor === 'gray' ? 'red' : 'gray');
        return () => {
            console.log('render');
        }
    }, [count]);

    const addCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <ul style={{
            backgroundColor: color,
        }}>
            <button onClick={addCount}>+</button>
            <div>{count}</div>
            {arr.map(i => {
                return <li>
                    <p>{i + ')'}</p>
                    <div style={{
                        // backgroundColor: color,

                    }}>{arr2[i - 1]}</div>
                </li>
            })}
        </ul>
    )
}
export default List;