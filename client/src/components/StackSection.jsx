import React from 'react'
import StackItem from './StackItem'

const StackSection = (props) => {
    const { items } = props

    return (
        <>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                {items.map(element => {
                    return <StackItem {...element} key={ element.id }/>
                })}
            </div>
        </>
    )
}

export default StackSection