import PostsList from "./PostsList";
function Post() {

    return (
        <>

            <div>
                <p>userId: {post.userId}</p>
                <p>Id: {post.id}</p>
                <p>title: {post.title}</p>
                <p>body: {post.body}</p>
            </div>

        </>
    )
}

export default Post;