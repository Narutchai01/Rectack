const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus quidem ipsum doloremque iure vel natus cupiditate magni maiores nobis, dictasdadadadsdfear adf dsf adf a ad fa df ad fa ad fad fadf adf a voluptas numquam consequuntur. Dolores recusandae iusto distinctio animi inventore."

const CommunityPostItem = () => {
    return  (
        <div className="mx-auto min-h-[50px] w-auto bg-white border border-gray-300 shadow-sm p-4 rounded-xl my-2">
            <div className="inline-flex items-center m-1">
                <div className="rounded-full w-10 h-10 border-2"/>
                <div>
                    <h2 className="ml-2 font-medium mb-2">Username1</h2>
                </div>
            </div>
            <div className="font-bold">
                Lorem ipsum dolor sit amet.
            </div>
            <div className="flex justify-between text-xs mx-2">
                {text}
            </div>
            <div className="w-[98%] mx-auto my-5 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-gray-600 mr-2">like</span>
                    <span className="text-gray-600 mr-2">Comment</span>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-600 mr-2">
                        Tags/Stacks:
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CommunityPostItem;