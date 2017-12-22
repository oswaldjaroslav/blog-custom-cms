import * as React from 'react';
import { ArticleType } from '../types/article.type';

const styles = {
    wrapper: {
        border: '2px solid black',
        margin: '5px',
        textAlign: 'center',
        width: '300px'
    }
}

export interface ArticleItemProps {
    article: ArticleType
}

export const ArticleItem = (props: ArticleItemProps) =>
    <li>
        <div className='article-item' style={styles.wrapper} >
            <h3>{props.article.title}</h3>
            <h4>{props.article.author}</h4>
            <hr/>
            <p>{props.article.message}</p>
        </div>
    </li>