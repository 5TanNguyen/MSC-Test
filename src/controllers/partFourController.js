import axios from "axios";

let callPublicAPI = async (req, res) => {
    let url = `https://api.vietqr.io/v2/banks`;
    let dataAPI;

    await axios({
        method: 'get',
        url,
        // auth: {
        //     username: 'the_username',
        //     password: 'the_password'
        // }
    })
        .then(function (response) {
            dataAPI = response.data.data
        })
        .catch(function (error) {
            console.log(error);
        });

    return res.render("part4/problem6", {
        listBank: dataAPI
    });
}

module.exports = {
    callPublicAPI: callPublicAPI,
}