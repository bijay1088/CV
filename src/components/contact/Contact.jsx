import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3> Send me a message <FontAwesomeIcon icon={faEnvelope} className='ms-2'/></h3>

        <p>For any inquiries, feel free to contact me at given address.</p>
        <ul>
          <li><FontAwesomeIcon icon={faPhone} className='me-2'/><a href="tel:+44 07778794590">+44 07778794590</a></li>
          <li><FontAwesomeIcon icon={faEnvelope} className='me-2'/><a href="mailto:bijaybaniya1088@gmail.com">bijaybaniya1088@gmail.com</a></li>
          <li><FontAwesomeIcon icon={faMapMarkerAlt} className='me-2'/>London, UK<br/>UK</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
