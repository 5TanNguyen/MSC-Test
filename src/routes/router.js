import express from "express";
import partOneController from "../controllers/partOneController";
import partTwoController from "../controllers/partTwoController";
import partThreeController from "../controllers/partThreeController";
import partFourController from "../controllers/partFourController";

let router = express.Router();

let initWebRouters = (app) => {
    // PART 1
    router.get('/', partOneController.problem1);
    router.post('/part-1/problem-1', partOneController.postProblem1);
    router.get('/part-1/problem-2', partOneController.getDisplayProblem2);
    router.post('/part-1/problem-2', partOneController.postProblem2);

    // PART 2
    router.get('/part-2/problem-3', partTwoController.getDisplayProblem3);
    router.post('/part-2/problem-3', partTwoController.postProblem3);
    router.get('/part-2/problem-4', partTwoController.getDisplayProblem4);
    router.post('/part-2/problem-4', partTwoController.postProblem4);

    // PART 3
    router.get('/part-3/problem-5', partThreeController.getDisplayProblem5);

    // PART 4
    router.get('/part-4/problem-6', partFourController.callPublicAPI);

    router.get('/', (req, res) => {
        return res.send("Hello world from 5tan");
    })

    return app.use("/", router);
}

module.exports = initWebRouters;