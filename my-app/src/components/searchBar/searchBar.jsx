import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../store/shop/slice';
const SearchBar = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(search(inputText));
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputText} onChange={inputHandler} />
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchBar;