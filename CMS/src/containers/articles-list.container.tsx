import * as React from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../actions/index.actions';
import { RootReducer } from '../reducers/root.reducer';
import { ArticleType } from '../types/article.type';
import { ArticleItem } from '../components/article-item.component';
import Paper from 'material-ui/Paper';

const styles = {
    paper: {
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    }
}


interface ArticleListProps extends StateToProps, DispatchToProps {}

class ArticleListBase extends React.Component<ArticleListProps> {

    componentWillMount() {
        this.updateArticles();
    }

    render() {
        return (
            <div className="articles-container">
                <Paper zDepth={1} style={styles.paper} >

                </Paper>
            </div>
        )
    }

    updateArticles = () => {
        this.props.getArticles();
    }

}

interface StateToProps {
    articles: Array<ArticleType>;
}

interface DispatchToProps {
    getArticles(): any;
}

const mapStateToProps = (state: RootReducer): StateToProps => {
    return {
        articles: state.articles
    }
}

export const ArticleList =
    connect<StateToProps, DispatchToProps, any>(mapStateToProps, {getArticles})(ArticleListBase)