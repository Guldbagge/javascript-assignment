import React from 'react'

const ButtonClean = ({type, url, titel}) => {

    const getButtonClassName = () => {
        switch (type) {
            case 'yellow':
            return 'btn-yellow'
            case 'dark':
            return 'btn-black'
            case 'gray':
            return 'btn-gray'
            default: 
            return 'btn-transparent'
        }
    }
    
  return (
    <a className={getButtonClassName()} href={url}>{titel}</a> 
  )
}

export default ButtonClean