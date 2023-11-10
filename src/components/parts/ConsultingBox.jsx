import React from 'react'

const ConsultingBox = ({icon, title, description}) => {
  return (
    <div className="process">
    <div>
      <button className="btn-round">
        <i className={icon}></i>
      </button>
    </div>

    <div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  </div>
  )
}

export default ConsultingBox