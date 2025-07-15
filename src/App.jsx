import Resume from './components/Resume'
import './styles.css'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'

const resumeData = {
  name: 'Чагин Денис Олегович',
  position: 'Frontend Developer (React/TypeScript)',
  about:
    'Активно равиваюсь как Frontend разработчик, применяя новые знания как в профессиональной деятельности, так и в личных Pet-проектах',
  education: [
    {
      degree: 'Информационные системы и программирование ',
      university:
        'Костромской политехнический колледж (среднее профессиональное)',
      period: '2020 - 2024',
    },
  ],
  experience: [
    {
      position: 'Стажировка/Практика Frontend разработчик',
      company: 'ММТР Технологии г. Кострома',
      period: 'c января 2024 - по май 2024',
      duties: [
        'Изучение основ языков HTML, CSS, JavaScript',
        'Разработка SPA-приложений используя React JS',
        'Разработка интерактивной системы обучения сотрудников Make Me Top',
      ],
    },
  ],
  projects: [
    {
      title: 'Make Me Top (Frontend)',
      tech: 'React, TypeScript, Redux Toolkit, RTK Query',
      description:
        'Доработка основного функционала клиенской части интерактивной системы обучения сотрудников Make Me Top в рамках стажировки в компании ММТР Технологии',
    },
    {
      title: 'Code Typing (Frontend)',
      tech: 'React, Typescript, Effector, React Query, Chakra UI',
      description:
        'Pet-проект - тренажер скорости печати с IDE-подобным интерфейсом с выбором языка программирования, выбором темы и шрифта, а также с анализом статистики (скорость, точность). Реализованы режимы для тренировки конкретных конструкций и сохранение результатов.',
    },
    {
      title: 'Wood Client (Frontend)',
      tech: 'React, Typescript, Redux Toolkit, RTK Query, Material UI, Nivo Charts',
      description:
        'Совместная разработка клиенской части приложения для учета работы лесоперерабатывающего предприятия',
    },
  ],
  skills: [
    {
      title: 'Frontend',
      items: [
        'HTML, CSS, JavaScript',
        'React JS',
        'TypeScript',
        'Redux (Toolkit, RTK Query)',
        'React Query',
        'Основы React Hook Form',
        'Chakra UI, Material UI',
        'Основы SCSS, SASS',
      ],
    },
    {
      title: 'Языки программирования',
      items: ['Базовое понимание работы Java, Python, C#'],
    },
    {
      title: 'Инструменты',
      items: ['Git', 'SQL', 'Основы Docker'],
    },
  ],
  photo: 'photo.jpg',
  contacts: [
    {
      icon: faPhone,
      href: 'tel:+79536510450',
      text: '+7 (953) 651-04-50',
    },
    {
      icon: faEnvelope,
      href: 'mailto:denischaginnn@gmail.com',
      text: 'denischaginnn@gmail.com',
    },
    {
      icon: faGithub,
      href: 'https://github.com/denischagin',
      text: 'denischagin',
    },
    {
      icon: faTelegram,
      href: 'https://t.me/cheek_react',
      text: 'cheek_react',
    },
  ],
}

function App() {
  return (
    <div className="app">
      <button onClick={() => toPDF()}>Скачать</button>
      <Resume
        {...resumeData}
        ref={targetRef}
      />
    </div>
  )
}

export default App
