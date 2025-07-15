import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Skills = ({ categories }) => {
  return (
    <div className="skills">
      {categories.map((skillCategory, index) => (
        <div
          key={index}
          className="skills__category"
        >
          <div className="skills__header">
            <FontAwesomeIcon
              icon={faCode}
              className="skills__icon"
            />
            <h4 className="skills__title">{skillCategory.title}</h4>
          </div>
          <ul className="skills__list">
            {skillCategory.items.map((skill, skillIndex) => (
              <li
                key={skillIndex}
                className="skills__item"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Skills
