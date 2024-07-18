let problem1 = (req, res) => {
    let result = 0;
    return res.render("part1/problem1", {
        result: result
    });
}

let postProblem1 = (req, res) => {
    let data = req.body;
    let array = [];

    for (let i = 1; i <= 100; i++) {
        if (i % (data.xNum * data.yNum) == 0) {
            array[i - 1] = 'FooBar'
        } else if (i % data.xNum == 0) {
            array[i - 1] = 'Foo';
        } else if (i % data.yNum == 0) {
            array[i - 1] = 'Bar';
        }
        else {
            array[i - 1] = i;
        }
    }

    return res.render("part1/problem1", {
        result: array
    });
}

let getDisplayProblem2 = (req, res) => {
    let result = 0;
    res.render("part1/problem2", {
        result: result
    })
}

let postProblem2 = (req, res) => {
    let string = req.body.prob2String;
    let leftPosition = 0;
    let rightPosition = string.length - 1;
    let result = 1;

    while (leftPosition < rightPosition) {
        if (string[leftPosition] !== string[rightPosition]) {
            result = -1;
        }
        leftPosition++;
        rightPosition--;
    }

    return res.render("part1/problem2", {
        result: result
    });
}

module.exports = {
    problem1: problem1,
    postProblem1: postProblem1,
    getDisplayProblem2: getDisplayProblem2,
    postProblem2: postProblem2,
}