import IdName from "./IdName";
function Post(props) {
    const idName = props.userId - 1;
    return (
        <>
            <div>
                <p>Name: <IdName userNum={idName} /></p>
                <p>Id: {props.id}</p>
                <p>title: {props.title}</p>
                <p>body: {props.body}</p>
            </div>

        </>
    )
}

export default Post;