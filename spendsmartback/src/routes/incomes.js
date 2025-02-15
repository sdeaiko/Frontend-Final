import expressPromiseRouter from 'express-promise-router';
import incomeController from "../controllers/income.controller.js";


const incomeRouter = expressPromiseRouter();
incomeRouter.route('/:id').get(incomeController.get)
incomeRouter.route('/').post(incomeController.create)
incomeRouter.route('/').get(incomeController.getAll)
incomeRouter.route('/:id').put(incomeController.update)
incomeRouter.route('/:id').delete(incomeController.delete)

export default incomeRouter