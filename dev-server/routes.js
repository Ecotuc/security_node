import productsRoutes from './api/products-routes';

export function registerRoutes(app){
    app.use('/api', productsRoutes);   
}
