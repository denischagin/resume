import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = ({ icon, linkProps }) => {
  return (
    <div className="contact">
      <FontAwesomeIcon
        icon={icon}
        className="contact__icon"
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="contact__text"
        {...linkProps}
      />
    </div>
  )
}

export default Contact
