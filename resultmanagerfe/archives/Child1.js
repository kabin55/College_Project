export function Child1({message, onClick, count}) {
    const buttonClick = () => {
        onClick('Child 1');
    }
    
    return <>
    <p>Child1 Message: {message}</p>
    <button onClick={buttonClick}>Child1 Button</button>
    <p>Total count: {count}</p>
    </>
}