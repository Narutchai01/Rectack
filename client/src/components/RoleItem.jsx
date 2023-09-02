import React from 'react'
import PropTypes from 'prop-types'

const RoleItem = (props) => {
  const { title } = props

  return (
    <div>
        <button className='bg-white border-solid border border-[#8A8E99] text-[#231815] py-4 px-8 rounded-lg hover:bg-gradient-to-br from-[#CB160E] to-[#EA5B37] hover:text-white hover:border-hidden'>{ title }</button>
    </div>
  )
}

export default RoleItem