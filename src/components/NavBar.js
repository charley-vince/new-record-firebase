import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {MENU_URLs} from '../utils/URLs'
import translate from '../containers/translate'
import NavBarLogo from 'Images/nr-logo.png'
import {parseQuery} from '../utils/helpers'
require('Styles/navbar.less')

class NavBar extends React.Component {
  generateTabs() {
    const {pathname, search} = this.props
    const tag = parseQuery(search, 'tag')
    let header = this.props.strings
    let menuTabs = [header.home, header.portfolio.index, header.contacts, header.about]
    let menuHref = [
      MENU_URLs.HOME_URL,
      MENU_URLs.PORTFOLIO,
      MENU_URLs.CONTACTS_URL,
      MENU_URLs.ABOUT_URL
    ]
    let tabs = []
    for (let i = 0; i < menuTabs.length; i++) {
      if (menuTabs[i] != header.portfolio.index) {
        tabs[i] = (
          <button type="button" className="btn btn-link nr-navbar-btn" key={i}>
            <NavLink
              exact={menuHref[i] === '/'}
              to={menuHref[i]}
            >
              {menuTabs[i]}
            </NavLink>
          </button>
        )
      } else {
        let portfolioTagList = header.portfolio
        tabs[i] = (
          <button type="button" className="btn btn-link nr-navbar-btn position-static" key={i}>
            <NavLink
              to={menuHref[i].INDEX}
            >
              {menuTabs[i]}
            </NavLink>
            <ul className="nr-navbar-menu-dropdown p-0 position-absolute">
              <button type="button" className="btn btn-link nr-navbar-btn d-block">
                <NavLink
                  to={menuHref[i].WEDDINGS_URL}
                >
                  {portfolioTagList.weddings}
                </NavLink>
              </button>
              <button type="button" className="btn btn-link nr-navbar-btn d-block">
                <NavLink
                  to={menuHref[i].VOICE_URL}
                >
                  {portfolioTagList.voice}
                </NavLink>
              </button>
              <button type="button" className="btn btn-link nr-navbar-btn d-block">
                <NavLink
                  to={menuHref[i].OTHER_URL}
                >
                  {portfolioTagList.commercialProjects}
                </NavLink>
              </button>
            </ul>
          </button>
        )
      }
    }
    return tabs
  }

  render() {
    return (
    <div className="container-fluid nr-navbar-container">
      <div className="row justify-content-center">
        <NavLink to="/">
          <img  className="align-self-center mt-5 mb-4" width={170} src={NavBarLogo} title="New Record"/>
        </NavLink>
      </div>
      <div className="row justify-content-center pb-3 nr-navbar-menu">
          {this.generateTabs()}
      </div>
    </div>
    )
  }
}

NavBar.propTypes = {
  onChangeLanguage: PropTypes.func.isRequired,
  strings: PropTypes.object.isRequired
}

export default translate('NavBar')(NavBar)
