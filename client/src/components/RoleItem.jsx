import React from 'react'
import PropTypes from 'prop-types'

const RoleItem = (props) => {
  const { title } = props

  return (
    <div>
      <form action="/stack">
        <button type="submit" className='bg-white border-solid border border-[#8A8E99] text-[#231815] w-[300px] py-4 rounded-lg hover:bg-gradient-to-br from-[#CB160E] to-[#EA5B37] hover:text-white hover:border-hidden'>{ title }</button>
      </form>
    </div>
  )
}

export default RoleItem