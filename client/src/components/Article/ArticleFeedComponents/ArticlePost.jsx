import ArticlePostItem from "./ArticlePostItem.jsx";

function ArticlePost(props) {
    const { items, username, title, filter, currentUser } = props;

    const filteredItems = filter
        ? items.filter((element) => {
            return (
                element.role.includes(filter) ||
                element.tags.some((tag) => tag.includes(filter))
            );
        })
        : items;

    return (
        <>
            <ul className="">
                {filteredItems.map((element) => {
                    return <ArticlePostItem key={element.postId} username={username} currentUser={currentUser} title={title} {...element} />
                })}
            </ul>
        </>
    );
}

export default ArticlePost;
