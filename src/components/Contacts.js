import React from 'react'
import PropTypes from 'prop-types'
import translate from '../containers/translate'
require('Styles/contacts.less')

const Contacts = ({strings}) => {
  return (
    <div className="container text-center default-height-container contacts-wrapper">
      <h2 className="contact-header ">
        {strings.index}
      </h2>

      <div className="row">
        <div className="col-lg-offset-2 col-lg-3 col-md-offset-2 col-md-3 col-sm-offset-1 col-sm-4 col-xs-offset-2 col-xs-8">
          <div className="contact text-left">
            <span className="contact-fa">
              <i className="fa fa-mobile fa-4x" />
            </span>
            <span className="text-center contact-text">
              {strings.phoneNumber}
            </span>
          </div>

          <div className="contact text-left">
            <span className="contact-fa">
              <i className="fa fa-map-marker fa-4x" />
            </span>
            <span className="text-center contact-text">
              {strings.address}
            </span>
          </div>
        </div>

        <div className="col-lg-2 col-md-2 col-sm-2 hidden-xs contacts-border-wrapper">
          <div className="contacts-border" />
        </div>

        <div className="col-lg-3 col-md-3 col-sm-offset-0 col-sm-4 col-xs-offset-2 col-xs-8">
          <div className="contact text-left">
            <span className="contact-fa">
              <i className="fa fa-envelope fa-3x" />
            </span>
            <span className="text-center contact-text">
              newrec@gmail.com
            </span>
          </div>

          <div className="contact text-left ">
            <span className="contact-fa">
              <i className="fa fa-vk fa-4x" />
            </span>
            <span className="text-center contact-text">
              <a href="https://vk.com/newreccom"><span>vk.com/newreccom</span></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Contacts.PropTypes = {
  strings: PropTypes.object
}

export default translate('Contacts')(Contacts)
