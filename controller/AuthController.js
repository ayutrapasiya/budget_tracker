const user = require("../model/signUpModel");



module.exports.signUp = async (req, res) => {
    try {
        return res.render('signUp');
    }
    catch (err) {
        console.log(err, "Error fetching ");
        res.redirect('back');
    }
};

module.exports.insertSignUp = async (req, res) => {
    try {
        console.log(req.body);
        let checkEmail = await user.findOne({ email: req.body.email });
        if (!checkEmail) {

            if (req.body.password == req.body.confirm_pass) {

                let registerUser = await user.create(req.body);
                if (registerUser) {
                    res.redirect('/');
                }
            }
            else {
                console.log("password & confirm password are not mach..");
                res.redirect('back');
            }
        }
        else {
            console.log("Email is all ready Exist !! try another Email id..")
            res.redirect('back');

        }
    }
    catch (err) {
        console.log(err, "Error fetching ");
        res.redirect('back');
    }
}


module.exports.signIn = async (req, res) => {
    try {
        return res.render('signIn');

    } catch (err) {
        console.log(err);
        res.redirect('back');
    }
};


module.exports.signInData = async (req, res) => {
    try {
        let exitEmail = await user.find({ email: req.body.email }).countDocuments()
        if (exitEmail == 1) {
            let userEmail = await user.findOne({ email: req.body.email });
            if (userEmail.password == req.body.password) {
                res.cookie("user", userEmail);
                return res.redirect("/budget")
            }
            else {
                console.log("invalid password")
                return res.redirect("back")
            }
        }
        else {
            console.log("invalid email");
            return res.redirect("back")
        }
    }
    catch {
        console.log("something is wrong");
        return res.redirect("back")
    }
}