import React from 'react'
require('Styles/footer.less')
import footerLogo from 'Images/nr-footer-4.png'

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className=" col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4
                       col-sm-offset-4 col-xs-6 col-xs-offset-3 info-block-wrapper">
          <div className="social-networks text-center">

            <a className="social-network" href="#">
              <i className="fa fa-vk " />
            </a>
            <a className="social-network" href="#">
              <i className="fa fa-facebook " aria-hidden="true" />
            </a>
            <a id="social-network-id" className="social-network" href="#">
              <i className="fa fa-instagram " aria-hidden="true" />
            </a>
          </div>

          <div className="i18n-line-wrapper">
            <div className="row i18n-line" />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nr-label">
            <span>
              © NEW RECORD 2015
            </span>
          </div>

        </div>
        <div className=" col-lg-2 col-lg-offset-2 col-md-3 col-md-offset-1 col-sm-3
                       col-sm-offset-1 col-xs-3 footer-logo-wrapper">
          <img src={footerLogo} className="footer-logo" alt="footer-logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer
