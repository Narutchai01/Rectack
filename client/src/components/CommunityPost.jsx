import CommunityPostItem from "./CommunityPostItem.jsx";

function CommunityPost(props) {
    const {items} = props;
    return (
        <>
            <ul className="mt-[26%]">
                {items.map((element) => {
                    return <CommunityPostItem {...element}/>
                })}
            </ul>
        </>
    );
}

export default CommunityPost;