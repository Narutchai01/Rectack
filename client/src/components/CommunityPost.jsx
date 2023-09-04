import CommunityPostItem from "./CommunityPostItem.jsx";

function CommunityPost(props) {
    const { items, username } = props;

    return (
        <>
            <ul className="">
                {items.map((element) => {
                    return <CommunityPostItem key={element.postId} username={username} {...element} />
                })}
            </ul>
        </>
    );
}

export default CommunityPost;
