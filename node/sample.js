var express = require('express');
var router = express.Router();
const User = require('../models/schema');
// const studentDetails = require('../models/schema');

router.get('/list', async function (req, res, next) {

    User.find(
        function (err, response) {
            if (err) {
                res.send(err);
            }
            else {
                res.send({ status: 200, user: response });
            }
        }
    );
});


router.post('/add', async function (req, res, next) {

    let newUser = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password,
        Education: req.body.Education,
        Employment: req.body.Employment,
        Skills: req.body.Skills,
    });

    await newUser.save(
        // newUser.save(

        function (err, newUser) {
            if (err) {
                return err;
            }
            else {
                return newUser;
            }
        }
    );
    res.json(newUser);
});

router.post('/login', function (req, res) {
    var Email = req.body.Email;
    var Password = req.body.Password;

    User.findOne({ Email: Email, Password: Password }, function (err, user) {
        if (err) {
            console.log(err)
            return res.send(err)
        }
        if (!user) {
            return res.status(401).send("No such user exist")
        }
        if (user) {
            return res.status(200).send("User found")
        }
    })
});

// Adding the name of an existing user
router.put('/addName', async function (req, res) {
    try {

        let email = req.body.Email;
        let fname = req.body.FirstName;
        let lname = req.body.LastName;


        let updUser = await User.updateOne({ "Email": email }, { $set: { "FirstName": fname, "LastName": lname } });

        let user = await User.findOne({ "Email": email });

        res.json(user)

        // res.send(user.id)
        // res.send(user)
        // res.send(user.Education)

    } catch (err) {
        res.status(400).send(err)
        console.log("Bad requests");
    }

});



// Adding the skill of an existing user 
router.put('/addSkill', async function (req, res) {
    try {

        let email = req.body.Email;
        let updatingSkill = req.body.Skills;

        // const user = await User.findOne({ "Email": email });
        // console.log(email);
        // console.log(updatingSkill);

        let updUser = await User.updateOne({ "Email": email }, { $push: { "Skills": updatingSkill } });

        let user = await User.findOne({ "Email": email });

        res.json(user)

        // res.send(user.id)
        // res.send(user)
        // res.send(user.Education)

    } catch (err) {
        res.status(400).send(err)
        console.log("Bad requests");
    }

});



router.post("/nameOfUser", async function (req, res) {

    const email = req.body.Email
    try {
        const user = await User.findOne({ "Email": email })
        res.json(user.FirstName + " " + user.LastName)
    } catch (error) {
        console.log(error);
    }
})



router.post("/skillOfUser", async function (req, res) {

    const email = req.body.Email
    try {
        const user = await User.findOne({ "Email": email })
        res.json(user.Skills)
    } catch (error) {
        console.log(error);
    }
})

router.post("/eduOfUser", async function (req, res) {

    const email = req.body.Email
    try {
        const user = await User.findOne({ "Email": email })
        res.json(user.Education)
    } catch (error) {
        console.log(error);
    }
})

router.post("/expOfUser", async function (req, res) {

    const email = req.body.Email
    try {
        const user = await User.findOne({ "Email": email })
        res.json(user.Employment)
    } catch (error) {
        console.log(error);
    }
})



// Adding the education part of that user

router.patch('/addEdu', async function (req, res) {
    try {

        let email = req.body.Email;
        // let nameOfInsti = req.body.nameOfInstitution;
        // let nameOfDegree = req.body.typeOfDegree;
        // let fieldOfStudy = req.body.fieldOfStudy;


        let updUser = await User.updateOne({ "Email": email }, {
            $push: {
                Education: req.body.Education.map((Education) => {
                    return {
                        nameOfInstitution: Education.nameOfInstitution,
                        typeOfDegree: Education.typeOfDegree,
                        fieldOfStudy: Education.fieldOfStudy
                    };
                })
            }
        });
        // learn map, filter, reduce, destucring 

        let user = await User.findOne({ "Email": email });
        // console.log(updUser);
        res.json(user)

    } catch (err) {
        res.status(400).send(err)
        console.log(err);
    }

});


// Adding the experience of that user


router.patch('/addEmp', async function (req, res) {
    try {

        let email = req.body.Email;
        // let nameOfInsti = req.body.nameOfInstitution;
        // let nameOfDegree = req.body.typeOfDegree;
        // let fieldOfStudy = req.body.fieldOfStudy;


        let updUser = await User.updateOne({ "Email": email }, {
            $push: {
                Employment: req.body.Employment.map((Employment) => {
                    return {
                        nameOfCompany: Employment.nameOfCompany,
                        titleOfJob: Employment.titleOfJob,
                        duration: Employment.duration
                    };
                })
            }
        });

        // console.log(updUser);
        res.json(user)

    } catch (err) {
        res.status(400).send(err)
        console.log(err);
    }

});


router.put("/delSkill", async function (req, res) {

    const email = req.body.Email
    const skills = req.body.Skills
    try {
        const user = await User.findOneAndUpdate({ "Email": email }, { $pull: { Skills: skills } });
        const updUser = await User.findOne({ Email: email });
        res.send(updUser)
    } catch (error) {
        console.log(error);
    }
})

router.delete('/delete', function (req, res) {
    const email = req.body.Email;

    User.findByIdAndDelete(email, function (err, response) {
        if (err)
            res.send(err)
        else
            res.send({ status: 200, response })
    })
});


module.exports = router;
// https://www.linkedin.com/pulse/http-requests-es6-es5-jquery-komal-kedia/
