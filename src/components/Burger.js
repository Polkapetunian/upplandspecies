import React from 'react'

const Burger = ({ open, setOpen }) => {
  return (
    <div className="burger-icon" onClick={() => setOpen(!open)}>
      <span className={open ? "first-line-open" : ""}></span>
      <span className={open ? "second-line-open" : ""}></span>
      <span className={open ? "third-line-open" : ""}></span>
    </div>
  )
}

export default Burger

