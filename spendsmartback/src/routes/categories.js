import expressPromiseRouter from 'express-promise-router';
import categoryController from "../controllers/category.controller.js";


const categoryRouter = expressPromiseRouter();

categoryRouter.route('/:id').get(categoryController.get)
categoryRouter.route('/').post(categoryController.create)
categoryRouter.route('/').get(categoryController.getAll)
categoryRouter.route('/:id').put(categoryController.update)
categoryRouter.route('/:id').delete(categoryController.delete)

export default categoryRouter