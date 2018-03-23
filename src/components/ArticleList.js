import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './Article/index'
import accordion from '../decorators/accordion'
import {filtredArticlesSelector} from '../selectors'

class ArticleList extends React.Component {
  static propTypes = {
    // props
    articles: PropTypes.array,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  }
  
  render(){
    const {articles, openItemId, toggleOpenItem} = this.props
    const articleElements = articles.map(article=>
      <li key={article.id}>
        <Article
          article={article}
          isOpen = {article.id === openItemId}
          toggleOpen={toggleOpenItem(article.id)}
        />
      </li>)

    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
}

export default connect((state)=>{
  return {
    articles: filtredArticlesSelector(state)
  }
})(accordion(ArticleList))