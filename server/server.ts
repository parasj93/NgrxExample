import * as express from 'express';
import {Application} from "express";
import {getAllExpenses, getExpenseById} from "./get-expenses.route";
import {saveCourse} from "./save-expense.route";
const bodyParser = require('body-parser');
const app: Application = express();


app.use(bodyParser.json());
app.route('/api/expenses').get(getAllExpenses);
app.route('/api/expenses/:id').put(saveCourse);
app.route('/api/expenses/:id').get(getExpenseById);




const httpServer = app.listen(3000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




