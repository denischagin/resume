import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Section = ({ title, icon, children, align = 'left' }) => {
  return (
    <div className="resume__section">
      <div
        className={
          'section-header ' +
          (align === 'right' ? 'section-header_align_right' : '')
        }
      >
        <div className="section-header__icon">
          <FontAwesomeIcon
            icon={icon}
            className="section-header__symbol"
          />
        </div>
        <h3 className="section-header__title">{title}</h3>
      </div>
      <div className="section-content">{children}</div>
    </div>
  )
}

export default Section
