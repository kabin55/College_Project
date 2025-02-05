import { useEffect, useState } from "react";

export const Loader = (WrappedComponent) => {
    return function WithLoader(props){
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            },5000);
        }, []);
        return <WrappedComponent{...props} loading = {loading} />;
    }
}