import { useEffect, useState } from "react"

export function Data({loading}) {
    const [data, setData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    
    useEffect(() => {
        console.log('Side effect on every render');
    });

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) =>  {
       return res.json();
    })
       .then((data) => setData(data));
    }, []);
    
    useEffect(() => {
        if(data && data.length){ 
            setDataLoaded(true);
            return;
        }
        setDataLoaded(false);
        }, [data])

    return (
        <>
        {loading ? (
            <p>Data Loading!</p>
        ) : (
            <>
        {dataLoaded ? <p>Data Loaded Successfully!</p> : ''}
        <ul>
            {data.map((d) => (
                <li>{d.title}</li>
            ))}
        </ul>
        </>
        )}
    </>)
}