import * as React from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../actions/index.actions';
import { RootReducer } from '../reducers/root.reducer';
import { ArticleType } from '../types/article.type';
import { ArticleItem } from '../components/article-item.component';

interface ArticlesListProps {
    getArticles?: Function,
    articles?: Array<ArticleType>
}

class ArticlesListBase extends React.Component<ArticlesListProps, any> {

    componentWillMount() {
        this.updateArticles();
    }

    updateArticles = () => {
        this.props.getArticles();
    }

    render() {
        const { articles } = this.props;
        return (
            <ul>
                {articles.map(i => (
                    <ArticleItem article={i} key={i._id} />
                ))}
            </ul>
        )
    }
}

function mapStateToProps(state: RootReducer) {
    return {
        articles: state.articles
    }
}

export const ArticlesList = connect<any, any, any>(mapStateToProps, {getArticles})(ArticlesListBase);