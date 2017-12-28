import { Express } from 'express';
import { Sites } from './controlers/sites';
import { API } from './controlers/api';
import { Auth } from './controlers/auth';
const PassportService = require('./services/passport.service');
import { authenticate } from 'passport';

const requireAuth = authenticate('jwt', { session: false });
const requireSignIn = authenticate('local', { session: false });

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

    // Authentication

    app.post('/auth/signup', Auth.signUp);
    app.post('/auth/signin', requireSignIn, Auth.authenticate);
    app.get('/auth/authenticate', requireAuth, Auth.authenticate);

}