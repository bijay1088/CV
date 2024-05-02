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
        <h3> Send us a message <FontAwesomeIcon icon={faEnvelope} className='ms-2'/></h3>

        <p>For any inquiries, feel free to contact us at given address.</p>
        <ul>
          <li><FontAwesomeIcon icon={faPhone} className='me-2'/>+977-9841574783  </li>
          <li><FontAwesomeIcon icon={faEnvelope} className='me-2'/>gandakistudio@gmail.com</li>
          <li><FontAwesomeIcon icon={faMapMarkerAlt} className='me-2'/>Balkumari, Kharibot<br/>Lalitpur, Nepal</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
