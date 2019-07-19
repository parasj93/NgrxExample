import {Request, Response} from 'express';
import {EXPENSES} from "./db-data";


export function saveCourse(req: Request, res: Response) {

    console.log("Saving expenses ...");

    const id = req.params["id"],
        changes = req.body;

    EXPENSES[id] = {
        ...EXPENSES[id],
        ...changes
    };

    res.status(200).json(EXPENSES[id]);

}

