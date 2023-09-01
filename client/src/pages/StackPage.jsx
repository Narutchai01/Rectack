import RoleItem from "../components/RoleItem"

const StackPage = () => {
    return (
        <>
            <div className="max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
                <h1 className="text-[#CB160E] font-bold text-8xl pb-7">Rectack</h1>
                <p className="text-[#231815] text-2xl">Let’s find the right tools for your project</p>
                <p className="text-[#231815] text-2xl"><span className="text-[#EA5B37]">Learn</span> tools | <span className="text-[#EA5B37]">Ask</span> question | <span className="text-[#EA5B37]">Guide</span> developer</p>
                <div className="w-full border-b-2 my-7"></div>
                <h1 className="text-[#231815] font-bold text-5xl">Select the Role</h1>
                <div className="grid grid-cols-4 gap-4">
                    <RoleItem />
                </div>
            </div>
        </>
    )
}

export default StackPage