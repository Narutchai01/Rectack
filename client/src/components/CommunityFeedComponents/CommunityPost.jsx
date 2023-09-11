import CommunityPostItem from "./CommunityPostItem.jsx";

function CommunityPost(props) {
    const { items, username, title } = props;

    return (
        <>
            <ul className="">
                {items.map((element) => {
                    return <CommunityPostItem key={element.postId} username={username} title={title} {...element} />
                })}
            </ul>
        </>
    );
}

export default CommunityPost;
