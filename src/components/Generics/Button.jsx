import React from 'react'

const Button = ({type, url, titel}) => {

    const getButtonClassName = () => {
        switch (type) {
            case 'yellow':
            return 'btn-yellow'
            case 'dark':
            return 'btn-black'
            default: 
            return 'btn-transparent'
        }
    }
    
  return (
    <a className={getButtonClassName()} href={url}>{titel}<i className="fa-solid fa-arrow-up-right"></i></a> 
  )
}

export default Button