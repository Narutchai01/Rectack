import CommunityPostItem from "./CommunityPostItem.jsx";

function CommunityPost(props) {
    const {items} = props;
    return (
        <>
            <ul className="">
                {items.map((element) => {
                    return <CommunityPostItem {...element}/>
                })}
            </ul>
        </>
    );
}

export default CommunityPost;