import { PDFViewer } from '@react-pdf/renderer'
import ResumePDF from './components/ResumePDF'

const resumeData = {
  name: 'Чагин Денис Олегович',
  position: 'Frontend Developer (React/TypeScript)',
  about: `Создаю сложные пользовательские интерфейсы на React TypeScript, уделяя особое внимание производительности и удобству использования. Разрабатываю и дорабатываю функционал, обеспечивая качественную реализацию новых возможностей. Настройка клиент-серверного взаимодействия на стороне клиента. 
Занимался настройкой и кастомизацией тем приложений, создавая интуитивно понятный пользовательский интерфейс. Постоянно слежу за современными трендами фронтенд-разработки, внедряя лучшие практики в проекты.`,
  education: [
    {
      degree: 'Информационные системы и программирование',
      university:
        'Костромской политехнический колледж (среднее профессиональное)',
      period: '2020 - 2024',
    },
  ],
  experience: [
    {
      position: 'Стажировка/Практика Frontend разработчик',
      company: 'ММТР Технологии г. Кострома',
      period: 'c декабря 2024 - по апрель 2024',
      duties: [
        'Изучил основы языков HTML, CSS, JavaScript',
        'Разработал тестовое SPA-приложение используя React JS',
        'Доработал интерактивную систему обучения сотрудников Make Me Top, используя React TypeScript',
      ],
      href: 'https://www.develonica.ru/mmtr-tech/',
    },
  ],
  projects: [
    {
      title: 'Make Me Top (Frontend)',
      tech: 'React, TypeScript, Redux Toolkit, RTK Query',
      description:
        'Доработка основного функционала клиентской части интерактивной системы обучения сотрудников Make Me Top в рамках стажировки в компании ММТР Технологии',
      href: 'https://github.com/denischagin/make-me-top',
    },
    {
      title: 'Code Typing (Frontend)',
      tech: 'React, Typescript, Effector, React Query, Chakra UI',
      description:
        'Pet-проект - тренажер скорости печати с IDE-подобным интерфейсом с выбором языка программирования, выбором темы и шрифта, а также с анализом статистики (скорость, точность). Реализованы режимы для тренировки конкретных конструкций и сохранение результатов.',
      href: 'https://github.com/denischagin/code-typing-frontend',
    },
    {
      title: 'Wood Client (Frontend)',
      tech: 'React, Typescript, Redux Toolkit, RTK Query, Material UI, Nivo Charts',
      description:
        'Разрабатывал клиентскую часть веб-приложения для учета на лесоперерабатывающем предприятии. Реализовывал функционал для отслеживания сырья и продукции. Проект создавался в команде с использованием современных frontend-технологий.',
      href: 'https://github.com/denischagin/wood-client',
    },
  ],
  skills: [
    {
      title: 'Frontend',
      items: [
        'HTML, CSS, JavaScript',
        'React (hooks, functional components)',
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
      items: ['Git', 'SQL', 'Основы Docker', 'Figma', 'Photoshop'],
    },
  ],
  photo: 'photo.jpg',
  contacts: [
    {
      name: 'Телефон',
      href: 'tel:+79536510450',
      text: '+7 (953) 651-04-50',
    },
    {
      name: 'Email',
      href: 'mailto:denischaginnn@gmail.com',
      text: 'denischaginnn@gmail.com',
    },
    {
      name: 'Github',
      href: 'https://github.com/denischagin',
      text: '@denischagin',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/cheek_react',
      text: '@denischagin',
    },
  ],
}

function App() {
  return (
    <div className="app">
      <PDFViewer
        width="100%"
        height={window.innerHeight}
      >
        <ResumePDF data={resumeData} />
      </PDFViewer>
    </div>
  )
}

export default App
