import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Education = ({ items }) => {
  return (
    <div className="education">
      {items.map((item, index) => (
        <div
          key={index}
          className="education__item"
        >
          <div className="education__header">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="education__icon"
            />
            <h4 className="education__degree">{item.degree}</h4>
          </div>
          <div className="education__details">
            <div className="education__university">{item.university}</div>
            <div className="education__period">{item.period}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Education
