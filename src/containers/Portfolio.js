import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getClipList} from '../actions/clip'
import Portfolio from '../components/Portfolio'
import translate from './translate'
import flow from 'lodash/flow'
import {parseQuery} from '../utils/helpers'

function mapStateToProps(state, ownProps) {
  return {
    contentList: state.clipPage.contentList,
    isFetching: state.clipPage.isFetching,
    clipError: state.clipError.error,
    activePage: parseInt(parseQuery(ownProps.location.search, 'page')),
    tag: parseQuery(ownProps.location.search, 'tag')
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({getClipList}, dispatch)
}

const decorators = flow([connect(mapStateToProps, mapDispatchToProps), translate('Portfolio')])

export default decorators(Portfolio)
