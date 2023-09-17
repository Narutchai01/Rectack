import React from 'react'
import RoleItem from "../components/RoleItem"

const RoleSection = (props) => {
    const { items } = props

    return (
    <>
        <div className="grid grid-cols-4 gap-4">
            {items.map(element => {
                return <RoleItem {...element} key={ element.id }/>
            })}
        </div>
    </>
  )
}

export default RoleSection