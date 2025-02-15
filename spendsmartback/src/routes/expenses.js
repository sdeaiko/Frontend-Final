import expressPromiseRouter from 'express-promise-router';
import expenseController from "../controllers/expense.controller.js";



const expenseRouter = expressPromiseRouter();
expenseRouter.route('/:id').get(expenseController.get)
expenseRouter.route('/').post(expenseController.create)
expenseRouter.route('/').get(expenseController.getAll)
expenseRouter.route('/:id').put(expenseController.update)
expenseRouter.route('/:id').delete(expenseController.delete)

export default expenseRouter