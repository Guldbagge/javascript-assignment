import React from 'react'
import { Link } from 'react-router-dom'

const BorderBox = ({url, icon, title, descriptionOne, descriptionTwo}) => {
  return (
    <div className="border">
    <Link to={url}>
        <div className="symbol">
            <button className="btn-round"><i className={icon}></i></button>
        </div>

        <div className="contact-information">
            <h3>{title}</h3>
            <p>{descriptionOne} <br/>{descriptionTwo}</p>
        </div>
    </Link>
</div>
  )
}

export default BorderBox