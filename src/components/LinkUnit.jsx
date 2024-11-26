import React from 'react'
import { Link } from 'react-router-dom'

const LinkUnit = ({text, to,className}) => {
  return (
    <Link viewTransition to={to} className={` px-2 py-1 text-primary font-medium hover:bg-accent  hover:text-secondary-foreground  relative bottom-1 rounded transition-all duration-500 ease-in-out ${className}`}>
    {text}
</Link>
   
  )
}

export default LinkUnit