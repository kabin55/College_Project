import {useState} from 'react';
export function DataForm(){
    const [personData, setPersonData] = useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPersonData({...personData, [name]: value});
    }
    const handleSubmit = () => {
        console.log(`Form Submitted`, {personData});
    }
    return <>
        <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type= "text" name="full_name" onChange={handleChange}/>
            <label> Age</label>
            <input type= "number" name="age" onChange={handleChange}/>
            <select name="gender" onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
        <p>This is {personData.full_name}. Age is: {personData.age} and gender is {personData.gender} </p>
    </>
}