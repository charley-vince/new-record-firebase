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
					<li key={i}>
						<NavLink
							exact={menuHref[i] === '/'}
							className="btn-menu-button"
							activeClassName="active-page-button"
							to={menuHref[i]}
						>
							{menuTabs[i]}
						</NavLink>
					</li>
				)
			} else {
				let portfolioTagList = header.portfolio
				tabs[i] = (
					<li key={i} className="dropdown-nav-parent">
						<NavLink
							to={menuHref[i].INDEX}
							className={
								pathname === '/portfolio' ? 'active-page-button btn-menu-button' : 'btn-menu-button'
							}
						>
							{menuTabs[i]}
							<div className="arrow" />
						</NavLink>
						<ul className="dropdown-nav ">
							<li>
								<NavLink
									className={
										pathname === '/portfolio' && tag === 'weddings'
											? 'active-page-button btn-menu-button'
											: 'btn-menu-button'
									}
									to={menuHref[i].WEDDINGS_URL}
								>
									{portfolioTagList.weddings}
								</NavLink>
							</li>
							<li>
								<NavLink
									className={
										pathname === '/portfolio' && tag === 'voice'
											? 'active-page-button btn-menu-button'
											: 'btn-menu-button'
									}
									to={menuHref[i].VOICE_URL}
								>
									{portfolioTagList.voice}
								</NavLink>
							</li>
							<li>
								<NavLink
									className={
										pathname === '/portfolio' && tag === 'other'
											? 'active-page-button btn-menu-button'
											: 'btn-menu-button'
									}
									to={menuHref[i].OTHER_URL}
								>
									{portfolioTagList.commercialProjects}
								</NavLink>
							</li>
						</ul>
					</li>
				)
			}
		}
		return tabs
	}

	render() {
		return (
			<nav className="navbar navbar-default" role="navigation">
				<div className="navbar-header navbar-header-center">
					<button
						type="button"
						className="navbar-toggle"
						data-toggle="collapse"
						data-target=".navbar-collapse"
					>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<NavLink className="navbar-brand" to="/">
						<img src={NavBarLogo} width="200" alt="New Record" />
					</NavLink>
				</div>
				<div className="navbar-collapse collapse">
					<ul className="nav navbar-nav navbar-center">
						{this.generateTabs()}

						<ul id="lang-menu">
							<li className="dropdown-lang-parent">
								<div id="current-lang">
									{this.props.strings.cngLang}
									<div className="arrow" />
								</div>
								<ul className="dropdown-nav">
									<li>
										<a
											href="/"
											onClick={() => this.props.onChangeLanguage('ru')}
											className="btn-menu-button dropdown-button"
										>
											Русский
										</a>
									</li>
									<li>
										<a
											href="/"
											onClick={() => this.props.onChangeLanguage('en')}
											className="btn-menu-button dropdown-button"
										>
											English
										</a>
									</li>
								</ul>
							</li>
						</ul>

					</ul>
				</div>
			</nav>
		)
	}
}

NavBar.propTypes = {
	onChangeLanguage: PropTypes.func.isRequired,
	strings: PropTypes.object.isRequired
}

export default translate('NavBar')(NavBar)
