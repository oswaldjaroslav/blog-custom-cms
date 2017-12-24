import { Express } from 'express';
import { Sites } from './controlers/sites';
import { API } from './controlers/api';

export const routes = (app: Express) => {

    app.get('/', Sites.getIndexPage);
    app.get('/admin', Sites.getAdminPage);
    app.get('/admin/*', Sites.getAdminPage);

    // CRUD for articles

    app.post('/API/article', API.createArticle);
    app.get('/API/article', API.getArticles);

    // CRUD for categories

    app.post('/API/category', API.createCategorie);
    app.get('/API/category', API.getCategories);

}