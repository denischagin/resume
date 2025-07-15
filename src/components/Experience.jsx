import React from 'react'

const ExperienceItem = ({ position, company, period, duties }) => {
  return (
    <div className="experience__item">
      <h4 className="experience__position">{position}</h4>
      <div className="experience__company">{company}</div>
      <div className="experience__period">{period}</div>
      <ul className="experience__duties">
        {duties.map((duty, index) => (
          <li
            key={index}
            className="experience__duty"
          >
            {duty}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Experience = ({ items }) => {
  return (
    <div className="experience">
      {items.map((item, index) => (
        <ExperienceItem
          key={index}
          {...item}
        />
      ))}
    </div>
  )
}

export default Experience
