import React from 'react';
import { connect } from 'react-redux';
import DisplayArticles from './components/DisplayArticles';
import DisplaySingleArticle from './components/DisplaySingleArticle';
import { fetchArticles } from './state/actions/articleAction';
import { bindActionCreators } from 'redux'

const App = props => {
  debugger
  props.fetchArticles()

  return (
    <>
      <h1>The Mars Times</h1>
      <DisplayArticles />
      {props.singleArticle && < DisplaySingleArticle />}
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch)
  }
}

const mapStateToProps = state => {
  return{
    singleArticle: state.singleArticle
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)