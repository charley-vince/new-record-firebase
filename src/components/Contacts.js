import React from 'react'
import PropTypes from 'prop-types'
import translate from '../containers/translate'
require('Styles/contacts.less')

const Contacts = ({strings}) => {
  return (
      <div className="container-fluid default-height-container nr-contacts-container">
        <div className="w-100 text-center mt-5">
          <h2 className="nr-contacts-header">{strings.index}</h2>
        </div>

        <div className="row nr-contacts-info align-items-start justify-content-center my-5 pt-5">
          <div className="nr-contacts-info-left px-1">
            <div className="d-flex align-items-center justify-content-between">
              <span><i className="fa fa-mobile fa-2x" /></span>
              <span className="pl-1 nr-contacts-info-text">{strings.phoneNumber}</span>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <span><i className="nr-contacts-ga-mark fa fa-map-marker" /></span>
              <span className="pl-1 nr-contacts-info-text">{strings.address}</span>
            </div>
          </div>

          <div className="mx-4 nr-contacts-info-border"/>

          <div className="nr-contacts-info-right px-1">
            <div className="d-flex align-items-center justify-content-between">
              <span><i className="fa fa-envelope fa-1x" /></span>
              <span className="pl-1 nr-contacts-info-text">newrec@gmail.com</span>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <span><i className="fa fa-vk fa-1x" /></span>
              <span className="pl-1 nr-contacts-info-text"><a href="https://vk.com/newreccom"><span>vk.com/newreccom</span></a></span>
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
