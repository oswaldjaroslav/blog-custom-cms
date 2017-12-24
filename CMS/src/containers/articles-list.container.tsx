import * as React from 'react';
import { connect } from 'react-redux';
import { getArticles, getCategories } from '../actions/index.actions';
import { RootReducer } from '../reducers/root.reducer';
import { ArticleType } from '../types/article.type';
import { ArticleItem } from '../components/article-item.component';
import Paper from 'material-ui/Paper';
import { ArticlesTable } from '../components/articles-table.component';
import ArticleAddDialog from '../components/dialogs/article-add-dialog.component';
import RaisedButton from 'material-ui/RaisedButton';
import { CategoryType } from '../types/category.type';

 
const styles = {
    paper: {
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    },
    button: {
        margin: 20
    }
}


interface ArticleListProps extends StateToProps, DispatchToProps {}
interface ArticleListState {
    addDialogOpened: boolean;
}

class ArticleListBase extends React.Component<ArticleListProps, ArticleListState> {

    constructor(props: ArticleListProps) {
        super(props);
        this.state = {
            addDialogOpened: false
        }
    }

    componentWillMount() {
        this.updateArticles();
        this.props.getCategories();
    }

    render() {
        const { articles } = this.props;
        const { addDialogOpened } = this.state;
        return (
            <div className="articles-container">
                <Paper zDepth={1} style={styles.paper} >
                    <ArticlesTable articles={articles} />
                </Paper>
                <RaisedButton label="New Article" secondary={true} 
                style={styles.button}
                onClick={() => { this.setState({ addDialogOpened: true }) }} />
                <ArticleAddDialog 
                open={addDialogOpened} 
                categories={this.props.categories}
                closeDialog={() => { this.setState({ addDialogOpened: false }) }} />
            </div>
        )
    }

    updateArticles = () => {
        this.props.getArticles();
    }

}

interface StateToProps {
    articles: Array<ArticleType>;
    categories: Array<CategoryType>;
}

interface DispatchToProps {
    getArticles(): any;
    getCategories(): any;
    
}

const mapStateToProps = (state: RootReducer): StateToProps => {
    return {
        articles: state.articles,
        categories: state.categories,
    }
}

export const ArticleList =
    connect<StateToProps, DispatchToProps, any>(mapStateToProps, 
        {getArticles, getCategories}
    )(ArticleListBase)