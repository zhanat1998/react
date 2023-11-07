import styles from './Home.module.css';
import { useEffect, useState } from "react";

function Home() {
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
    const removedCount = () => {
        setCount((prevCount) => prevCount - 1);
    }

    return (
        <>
            <button onClick={addCount}>+</button>
            <button onClick={removedCount}>-</button>
            <div style={{
                backgroundColor: color
            }}>{count}</div>
        </>
    );
}

export default Home;