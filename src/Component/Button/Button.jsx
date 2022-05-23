import React from 'react'

const Button = ({styl,func,val}) => {
  return (
    <button style={styl} onClick={func}>{val}</button>
  )
}

export default Button