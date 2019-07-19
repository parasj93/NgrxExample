import {Request, Response} from 'express';
import {EXPENSES} from "./db-data";



export function getAllExpenses(req: Request, res: Response) {

    console.log("Retrieving expense data ...");

    res.json({payload:Object.values(EXPENSES)});

}


export function getExpenseById(req: Request, res: Response) {

    const expenseId = req.params["id"];

    const expenses = Object.values(EXPENSES);

    const course = expenses.find(expense => expense.id == expenseId);

    res.status(200).json(course);
}