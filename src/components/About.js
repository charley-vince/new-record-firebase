import React from 'react'
import PropTypes from 'prop-types'
import translate from '../containers/translate'
import logos from '../utils/partners-logo'
require('Styles/about.less')

const About = ({strings}) => {
  let partnersLogo = logos.map((item, index) => {
    return (
      <img
        className=" col-lg-3 col-md-3 col-sm-3 col-xs-3"
        height={150}
        key={index}
        alt={item.name}
        src={item.url}
      />
    )
  })

  let productionItems = strings.productionItems

  return (
      <div className="container nr-about-container">
        <h2 className="text-center nr-about-header mt-5">
            {strings.index}
        </h2>
        <div className="my-2 nr-about-blockborder w-100"/>
        <div className="text-center mx-5 nr-about-text-content">
           <span>
            {strings.text}
          </span>
        </div>
        <div className="my-2 nr-about-blockborder w-100"/>

        <div className="row nr-about-positives my-5">
          <div className="nr-about-positive col-sm-4 col-lg-3 ">
            <div className="nr-about-positive-icon text-center">
              <span>
                <i className="fa fa-industry fa-3x" aria-hidden="true" />
              </span>
            </div>
            <div className="nr-about-positive-title text-center">
              <span>{productionItems.production[0]}</span>
            </div>
            <ul className="nr-about-positive-ul">
              <li>{productionItems.production[1]}</li>
              <li>{productionItems.production[2]}</li>
              <li>{productionItems.production[3]}</li>
              <li>{productionItems.production[4]}</li>
              <li>{productionItems.production[5]}</li>
            </ul>
          </div>
          <div className="nr-about-positive col-lg-3 col-sm-4">
            <div className="nr-about-positive-icon text-center">
            <span>
              <i className="fa fa-video-camera fa-3x" aria-hidden="true" />
            </span>
            </div>

            <div className="nr-about-positive-title text-center">
              <span>{productionItems.videography[0]}</span>
            </div>
            <ul className="nr-about-positive-ul">
              <li>{productionItems.videography[1]}</li>
              <li>{productionItems.videography[2]}</li>
              <li>{productionItems.videography[3]}</li>
              <li>{productionItems.videography[4]}</li>
            </ul>
          </div>
          <div className="nr-about-positive col-sm-4 col-lg-3 ">
            <div className="nr-about-positive-icon text-center">
            <span>
              <i className="fa fa-wrench fa-3x" aria-hidden="true" />
            </span>
            </div>

            <div className="nr-about-positive-title text-center">
              <span>{productionItems.postproduction[0]}</span>
            </div>
            <ul className="nr-about-positive-ul">
              <li>{productionItems.postproduction[1]}</li>
              <li>{productionItems.postproduction[2]}</li>
              <li>{productionItems.postproduction[3]}</li>
            </ul>
          </div>
          <div className="nr-about-positive col-sm-4 col-lg-3 ">
            <div className="nr-about-positive-icon text-center">
            <span>
              <i className="fa fa-microphone fa-3x" aria-hidden="true" />
            </span>
            </div>

            <div className="nr-about-positive-title text-center">
              <span>{productionItems.voice[0]}</span>
            </div>
            <ul className="nr-about-positive-ul">
              <li>{productionItems.voice[1]}</li>
              <li>{productionItems.voice[2]}</li>
              <li>{productionItems.voice[3]}</li>
            </ul>
          </div>
        </div>


        <div className="text-center nr-about-clients-header w-100">
            {strings.ourClients}
        </div>

        <div className="nr-about-clients-icons px-5">
	        {partnersLogo}
        </div>

      </div>
  )
}

About.PropTypes = {
  strings: PropTypes.object.isRequired
}

export default translate('About')(About)
