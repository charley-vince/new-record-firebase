import React from 'react'
import PropTypes from 'prop-types'
import translate from '../containers/translate'
import logos from '../utils/partners-logo'
require('Styles/about.less')

const About = ({strings}) => {
  let partnersLogo = logos.map((item, index) => {
    return (
      <img
        className=" col-lg-3 col-md-3 col-sm-3 col-xs-3 partner-logo img-responsive"
        key={index}
        alt={item.name}
        src={item.url}
      />
    )
  })

  let productionItems = strings.productionItems

  return (
    <div className="container default-height-container about-wrapper">
      <h2 className="about-header text-center">
        {strings.index}
      </h2>
      <div className="row">
        <div className=" col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10 about-decoration-blockborder" />
      </div>

      <div className="row">
        <div className="about-text col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8
          col-sm-offset-2 col-sm-8 col-xs-offset-2 col-xs-8">
          <span>
            {strings.text}
          </span>
        </div>
      </div>
      <div className="row">
        <div className=" col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10
                     col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10 about-decoration-blockborder" />
      </div>

      <div className="row">
        <div className="item col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="item-icon">
            <span>
              <i className="fa fa-industry fa-4x" aria-hidden="true" />
            </span>
          </div>
          <div className="item-title">
            <span>{productionItems.production[0]}</span>
          </div>
          <ul className="ul-center">
            <li>{productionItems.production[1]}</li>
            <li>{productionItems.production[2]}</li>
            <li>{productionItems.production[3]}</li>
            <li>{productionItems.production[4]}</li>
            <li>{productionItems.production[5]}</li>
          </ul>
        </div>
        <div className="item col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="item-icon">
            <span>
              <i className="fa fa-video-camera fa-4x" aria-hidden="true" />
            </span>
          </div>

          <div className="item-title">
            <span>{productionItems.videography[0]}</span>
          </div>
          <ul className="ul-center">
            <li>{productionItems.videography[1]}</li>
            <li>{productionItems.videography[2]}</li>
            <li>{productionItems.videography[3]}</li>
            <li>{productionItems.videography[4]}</li>
          </ul>
        </div>
        <div className="item col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="item-icon">
            <span>
              <i className="fa fa-wrench fa-4x" aria-hidden="true" />
            </span>
          </div>

          <div className="item-title">
            <span>{productionItems.postproduction[0]}</span>
          </div>
          <ul className="ul-center">
            <li>{productionItems.videography[1]}</li>
            <li>{productionItems.videography[2]}</li>
            <li>{productionItems.videography[3]}</li>
          </ul>
        </div>
        <div className="item col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="item-icon">
            <span>
              <i className="fa fa-microphone fa-4x" aria-hidden="true" />
            </span>
          </div>

          <div className="item-title">
            <span>{productionItems.voice[0]}</span>
          </div>
          <ul className="ul-center">
            <li>{productionItems.voice[1]}</li>
            <li>{productionItems.voice[2]}</li>
            <li>{productionItems.voice[3]}</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="our-clients-title col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <span>
            {strings.ourClients}
          </span>
        </div>
      </div>

      <div className="clients-logo">
        {partnersLogo}
      </div>
    </div>
  )
}

About.PropTypes = {
  strings: PropTypes.object.isRequired
}

export default translate('About')(About)
