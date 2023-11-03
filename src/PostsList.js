import { useEffect, useState } from "react";
import Post from "./Post";

function PostsList() {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getpost() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
            setLoading(false);
        };
        getpost();
    }, []);

    const postJSX = post.map((posts, index) => {
        return <Post />
    })

    return (
        <>

        </>
    )


}
export default PostsList;