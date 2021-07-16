import React from 'react'

const Burger = ({ open, setOpen }) => {
  return (
    <div className="burger-icon" tabIndex="0" role="button" onClick={() => setOpen(!open)} onKeyDown={() => setOpen(!open)}>
      <span className={open ? 'first-line-open' : ''} />
      <span className={open ? 'second-line-open' : ''} />
      <span className={open ? 'third-line-open' : ''} />
    </div>
  )
}

export default Burger

