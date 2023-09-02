import { useState } from "react"
import RoleSection from "../components/RoleSection"

const StackPage = () => {
    const RoleList = [
        {id : 1, title : "Web Development"},
        {id : 2, title : "Mobile Development"},
        {id : 3, title : "Game Development"},
        {id : 4, title : "Data Analysis"},
        {id : 5, title : "Computer Vision"},
        {id : 6, title : "NLP"}
    ]

    const [items, setItem] = useState(RoleList)

    return (
        <>
            <div className="max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
                <h1 className="text-[#CB160E] font-bold text-8xl pb-7">Rectack</h1>
                <p className="text-[#231815] text-2xl">Let’s find the right tools for your project</p>
                <p className="text-[#231815] text-2xl"><span className="text-[#EA5B37]">Learn</span> tools | <span className="text-[#EA5B37]">Ask</span> question | <span className="text-[#EA5B37]">Guide</span> developer</p>
                <div className="w-full border-b-2 my-7"></div>
                <h1 className="text-[#231815] font-bold text-5xl pb-7">Select the Role</h1>
                <RoleSection items = { items } />
            </div>
        </>
    )
}

export default StackPage