import {useState} from 'react';
export function Button(){
    // const [liked,setLike] = useState(false);
    // const [likeCount, setLikeCount] = useState(0);
    // const [count, setCount] = useState(0);
    const [item, setItem] = useState();
    const [list, setList] = useState([])

    // const onButtonClick = () => {
    //     setLike(!liked);
    //     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    // }

    // const onCountButtonClick = () => {
    //     setCount(count+1);
    // }
    // const onResetButtonClick=() => {
    //     setCount(0);
    // }
    const onInputChange = (e) => {
        setItem(e.target.value);
    }
    const onAddButtonClick = () => {
        setList([...list, item]);
        setItem('');
    }
    
    const onResetFieldButtonClick = () => {
        setList([]);
    }
    
    return(
    <>
    {/* 
    //like unlike
    <button onClick={onButtonClick}>{liked?'UnLike':'Like'}</button>
    <p>Count: {likeCount}</p> */}
    {/* 
    //counter and reset
    <button onClick={onCountButtonClick}>Count 1</button>
    <p>Total Count: {count}</p>
    <button onClick={onResetButtonClick}>Reset</button> */}
    <input value={item} onChange={onInputChange} />
    <button onClick={onAddButtonClick}>Add to List</button>
    <button onClick={onResetFieldButtonClick}>Reset List</button>
    <div>
        <ul>
            {list.map((listItem)=>(
                <li>{listItem}</li>
            ))}
        </ul>
    </div>

    </>
    );
}


//input field with add button added items go into list, reset btn that clears the list