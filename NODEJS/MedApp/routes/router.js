import { express } from "express";

let router = express.Router();

router.get('/', function(req, res){
    console.log('Hello World');
    res.status(200).jason({message: 'Hello World'});
});

export default router;