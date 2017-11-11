import React from 'react'
require('Styles/footer.less')
import footerLogo from 'Images/nr-footer-4.png'

const Footer = () => {
  return (
    <div className="container-fluid nr-footer-container position-static">
      <div className="row justify-content-center align-items-center">
        <div className="nr-footer-info my-4">

          <div className="d-flex justify-content-around nr-footer-social-networks">
            <a href="#">
              <i className="fa fa-vk " />
            </a>
            <a href="#">
              <i className="fa fa-facebook " aria-hidden="true" />
            </a>
            <a href="#">
              <i className="fa fa-instagram " aria-hidden="true" />
            </a>
          </div>

          <hr className="my-2"></hr>
          <span className="nr-footer-copyrights d-block">© NEW RECORD 2015</span>
        </div>
        <div className="nr-footer-logo position-absolute">
          <img src={footerLogo}  width={190} className="footer-logo" alt="footer-logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer
