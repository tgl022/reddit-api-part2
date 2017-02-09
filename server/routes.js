import express from 'express';

//Controlleres
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

const routes = express();

//Basic Routes
routes.get('/', basicController.get);

//User Routes
routes.post('/user', userController.post);
routes.get('/user', userController.get);

//Post Routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

//Comment Routes
routes.post('/comment', commentController.post);
//routes.get('/comment', commentController.getAll);

//Default Routes '*'

export default routes;
