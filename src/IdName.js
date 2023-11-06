import { useEffect, useState } from "react";

function IdName(props) {
    const [names, setNames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getname() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setNames(data);
            setLoading(false);
        };
        getname();
    }, []);



    return (
        <>
            {loading === false ? names[props.userNum].name : ""}
        </>
    )
}
export default IdName;
