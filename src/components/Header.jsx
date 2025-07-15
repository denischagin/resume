import Contact from './Contact'

const Header = ({ name, position, contacts }) => {
  return (
    <div className="resume__header">
      <div className="resume__info">
        <h1 className="resume__title">{name}</h1>
        <h2 className="resume__subtitle">{position}</h2>
        <div className="resume__contacts">
          {contacts.map((contact, index) => (
            <Contact
              key={contact.text}
              linkProps={{
                href: contact.href,
                children: contact.text,
              }}
              icon={contact.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
