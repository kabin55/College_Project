export function Child2({message, onClick, count}) {

    const buttonClick = () => {
        onClick('Child 2');
    }
    return <>
    <p>Child2 Message: {message} </p>
    <button onClick={buttonClick}>Child2 Button</button>
    <p>Total count: {count}</p>
    </>
}