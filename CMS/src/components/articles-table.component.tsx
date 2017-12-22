import * as React from 'react';
import { ArticleType } from '../types/article.type';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

interface ArticlesTableProps {
    articles: Array<ArticleType>;
}

export const ArticlesTable = (props: ArticlesTableProps) =>
    <div className="articles-table" >
        <Table 
        selectable={false} >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                <TableRow selectable={false} >
                    <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>Category</TableHeaderColumn>
                    <TableHeaderColumn>Author</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} >
                {props.articles.map(i => (
                    <TableRow key={i._id} selectable={false} >
                        <TableRowColumn>{i.title}</TableRowColumn>
                        <TableRowColumn>{i.category}</TableRowColumn>
                        <TableRowColumn>{i.author}</TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>