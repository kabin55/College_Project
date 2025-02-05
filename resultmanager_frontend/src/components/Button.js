import '../styles/global.css';
const Button = ({children, onClick}) => {
    return <>
        <button className='btnPrimary' onClick={onClick}>
            {children}
        </button>
    </>
}

export default Button;