import * as express from 'express'
import {CurrencyEnum} from "../../Core/Models/Enums/CurrencyEnum";

const currenciesRouter = express.Router();

currenciesRouter.get('/', (req, res) => {
    let names: string[] = [];
    for(let n in CurrencyEnum) {
        if(typeof CurrencyEnum[n] === 'number') names.push(n);
    }
    res.json(names)
});

export default currenciesRouter;