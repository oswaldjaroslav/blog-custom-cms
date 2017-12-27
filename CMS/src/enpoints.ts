export class Endpoints {
    public static serverBase = 'http://localhost:3000';

    public static getArticles = `${Endpoints.serverBase}/API/article`;
    public static getCategories = `${Endpoints.serverBase}/API/category`;
}