import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeLanguage} from '../actions/common'
import {Route, Switch, Redirect} from 'react-router-dom'
import About from '../components/About'
import Contacts from '../components/Contacts'
import NotFound from '../components/NotFound'
import Portfolio from './Portfolio'
import Login from './Login'
import Home from './Home'
import WQuestions from '../components/WeddingQuestionnaire'

class Page extends React.Component {
  render() {
    const {changeLanguage, location} = this.props
    const notFound = location.state ? location.state.notFound : false
    if (notFound) {
      return <Route component={NotFound} />
    } else {
      return (
        <div>
          <NavBar
            onChangeLanguage={changeLanguage}
            pathname={location.pathname}
            search={location.search}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/wquestions" component={WQuestions} />
            <Redirect
              to={{
                pathname: `${location.pathname}`,
                // hook for showing notFound
                state: {notFound: true}
              }}
            />
          </Switch>
          <Footer />
        </div>
      )
    }
  }

  getChildContext() {
    return {
      currentLanguage: this.props.currentLanguage
    }
  }
}

Page.childContextTypes = {
  currentLanguage: PropTypes.string.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: bindActionCreators(changeLanguage, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    currentLanguage: state.common.currentLang
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
