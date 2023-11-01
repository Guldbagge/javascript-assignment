import React from 'react'

const MeetOurTeamBox = ({img, title, description}) => {
  return (
    <div>
        <img src={img} alt={`Image of ${title}`} />
        <div className="information">
            <h3>{title}</h3>
            <p className="grey">{description}</p>
        </div>
    </div>
  )
}

export default MeetOurTeamBox