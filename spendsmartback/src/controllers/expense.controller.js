import genericCrud from "./generic.controller.js";
import Expense from '../models/ExpenseWrapper.js';

export default {...genericCrud(Expense)}