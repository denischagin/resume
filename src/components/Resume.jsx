import React, { forwardRef } from 'react'
import Header from './Header'
import Section from './Section'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import {
  faGraduationCap,
  faBriefcase,
  faProjectDiagram,
  faUser,
  faCode,
} from '@fortawesome/free-solid-svg-icons'

const Resume = forwardRef(({ ...data }, ref) => {
  return (
    <div
      className="resume"
      ref={ref}
    >
      <div className="resume__info">
        <Header
          name={data.name}
          position={data.position}
          contacts={data.contacts}
        />

        <Section
          title="О себе"
          icon={faUser}
        >
          <p className="section-content__text">{data.about}</p>
        </Section>

        <Section
          title="Образование"
          icon={faGraduationCap}
        >
          <Education items={data.education} />
        </Section>

        <Section
          title="Опыт работы"
          icon={faBriefcase}
        >
          <Experience items={data.experience} />
        </Section>

        <Section
          title="Проекты"
          icon={faProjectDiagram}
        >
          <Projects items={data.projects} />
        </Section>
      </div>

      <div className="resume__skills">
        <div className="resume__photo">
          <img
            src={data.photo}
            alt={data.name}
            className="photo"
          />
        </div>
        <Section
          title="Навыки"
          icon={faCode}
          align="right"
        >
          <Skills categories={data.skills} />
        </Section>
      </div>
    </div>
  )
})
export default Resume
