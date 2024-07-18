let getDisplayProblem3 = (req, res) => {
    let result = 0;
    return res.render("part2/problem3", {
        result: result
    });
}


// LỖI XÓA KHOẢNG TRẮNG
let postProblem3 = async (req, res) => {
    let string = req.body.prob3String;
    let array = string.split(',');
    let clipboardUsed = [];
    let lastResult = [];

    for (let i = 0; i < array.length; i++) {
        if (clipboardUsed.includes(array[i])) {
            continue;
        }
        let clipboard = [];
        for (let j = i + 1; j < array.length; j++) {
            let nextString = array[j].split('');
            await console.log('array[j]');
            await console.log(array[j]);///////////////////////////////////

            let result = true;
            for (let t = 0; t < array[j].length; t++) {
                if (nextString[t] == ' ') {
                    result = true;
                    await console.log('true');
                } else if (array[i].includes(`${nextString[t]}`)) {
                    result = true;
                    await console.log('true');
                } else {
                    result = false;
                    await console.log('false');
                    break;
                }
            }

            if (result == true) {
                await clipboard.push(array[j]);
                await clipboardUsed.push(array[j]);

                await console.log(array[j]);//////////////////////////////
                await console.log('______________________________________________________');
            }
        }
        if (!clipboardUsed.includes(array[i])) {
            await clipboard.push(array[i]);
        }
        if (clipboard !== []) {
            await lastResult.push(clipboard);
        }
    }

    // console.log('LAST RESULT')
    // console.log(lastResult)
    return res.render('part2/problem3', {
        result: lastResult
    })
}

let getDisplayProblem4 = (req, res) => {
    let result = 0;
    return res.render('part2/problem4', {
        result: result
    });
}

let postProblem4 = (req, res) => {
    console.log('UNKNOW');
}

module.exports = {
    getDisplayProblem3: getDisplayProblem3,
    postProblem3: postProblem3,
    getDisplayProblem4: getDisplayProblem4,
    postProblem4: postProblem4,
}